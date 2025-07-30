// PUT /blog/:id - update an existing blog post

// Handler function for updating a blog (all fields, not just images)
const updateBlogContent = async (req, res) => {
  try {
    const blogId = req.params.id;
    const data = req.body;
    const files = req.files;
    const blogRef = doc(db, 'blogmanagement', blogId);
    const blogSnap = await getDoc(blogRef);
    if (!blogSnap.exists()) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    const oldBlog = blogSnap.data();

    // Always update mainTitle and mainDescription from request
    const mainTitle = data.mainTitle || oldBlog.mainTitle || '';
    const mainDescription = data.mainDescription || oldBlog.mainDescription || '';

    // Main image: upload new if provided, else keep old
    let mainImageUrl = oldBlog.mainImage || '';
    if (files.mainImage && files.mainImage[0]) {
      mainImageUrl = await uploadImageToFirebase(
        `blog_main_${Date.now()}`,
        files.mainImage[0].buffer
      );
    }

    // Sub-sections: update each, upload new image if provided, always update text fields
    const subSections = [];
    for (let i = 1; i <= 3; i++) {
      const subTitle = data[`subTitle${i}`] !== undefined ? data[`subTitle${i}`] : (oldBlog.subSections && oldBlog.subSections[i-1]?.title) || '';
      const subDescription = data[`subDescription${i}`] !== undefined ? data[`subDescription${i}`] : (oldBlog.subSections && oldBlog.subSections[i-1]?.description) || '';
      let subImageUrl = (oldBlog.subSections && oldBlog.subSections[i-1]?.image) || '';
      if (files[`subImage${i}`] && files[`subImage${i}`][0]) {
        subImageUrl = await uploadImageToFirebase(
          `blog_sub${i}_${Date.now()}`,
          files[`subImage${i}`][0].buffer
        );
      }
      subSections.push({
        title: subTitle,
        description: subDescription,
        image: subImageUrl
      });
    }

    // Update blog document (all fields)
    const updatedBlog = {
      mainTitle,
      mainDescription,
      mainImage: mainImageUrl,
      subSections,
      // Do not update createdAt
    };
    await updateDoc(blogRef, updatedBlog);

    res.status(200).json({
      message: 'Blog updated successfully.',
      blog: { id: blogId, ...updatedBlog }
    });
  } catch (err) {
    console.error('Error updating blog:', err);
    res.status(500).json({
      error: 'Failed to update blog.',
      details: err.message
    });
  }
};

// Attach the updateBlogContent endpoint in the endpoint section


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const admin = require('firebase-admin');
const { getFirestore, doc, getDoc, updateDoc, collection, query, where, getDocs, addDoc,orderBy } = require('firebase/firestore'); // Add missing imports
const path = require('path'); 
const userRoutes = require('./routes/studentsroutes');
const { addContacts, getContacts, addCareers, getCareers, addSubscribers, getSubscribers, addquery, getquery,updateAdmin,getAdmin,addBrouchure,getBrouchure,getCms, addnewcms,getCmsAll} = require('./controllers');

const app = express();

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-firebase-project-id.appspot.com' // Replace with your actual Firebase storage bucket
});

const storage = getStorage();
const db = getFirestore(); // Initialize Firestore
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public', 'index.html'));

app.use(cors());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

// Set up multer to store files in memory
const upload = multer({ storage: multer.memoryStorage() });

// Resume file upload code
app.post('/careers/upload-file', upload.single("file"), async (req, res) => {
  const { email } = req.body;

  if (!email || !req.file) {
    return res.status(400).send('Email and file are required');
  }

  try {
    
    const fileExtension = req.file.originalname.split('.').pop(); 
    
    
    const newFileName = `${email}.${fileExtension}`; 
    
   
    const storageRef = ref(storage, `resume/${newFileName}`); 
    
    await uploadBytes(storageRef, req.file.buffer);

 
    const url = await getDownloadURL(storageRef);

    const careersRef = collection(db, 'careers');
    const q = query(careersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
     
      const docRef = querySnapshot.docs[0].ref;

  
      await updateDoc(docRef, {
        resume: url,
      });

      res.send({ message: 'File uploaded and resume updated successfully', url });
    } else {
      res.status(404).send('Document not found.');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file');
  }
});

// Routes for operations on Holistic Services
// Routes for managing Careers







// upload images arrays for CMS 

const { Buffer } = require('buffer');
const sharp = require('sharp'); // To resize and compress if necessary

// Helper function to upload an image to Firebase Storage
const uploadImageToFirebase = async (filename, imageInput) => {
    let buffer;
    if (Buffer.isBuffer(imageInput)) {
        buffer = imageInput;
    } else if (typeof imageInput === 'string') {
        // Remove base64 prefix if it exists
        const base64Image = imageInput.replace(/^data:image\/\w+;base64,/, '');
        buffer = Buffer.from(base64Image, 'base64');
    } else {
        throw new Error('Invalid image input type');
    }

    // Optionally compress the image if it exceeds a certain size
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (buffer.length > maxSize) {
        console.log(`Image size is ${buffer.length / (1024 * 1024)} MB, compressing...`);
        buffer = await sharp(buffer)
            .resize({ width: 1920 }) // Resize to max width
            .jpeg({ quality: 80 }) // Compress with 80% quality
            .toBuffer();
        console.log(`Compressed image size is ${buffer.length / (1024 * 1024)} MB`);
    }

    // Create a reference to Firebase Storage
    const imageRef = ref(storage, `images/${filename}`);
    
    // Upload the image buffer
    await uploadBytes(imageRef, buffer, { contentType: 'image/jpeg' });

    // Get the download URL of the uploaded image
    return await getDownloadURL(imageRef);
};

// Main handler to update text and images
const updateTextAndImage = async (req, res) => {
    try {
        const updates = req.body; // Expecting an object with update details (text and base64 images)
        console.log(updates);

        if (!updates.label) {
            throw new Error('The "label" field is required in the update object');
        }

        // Query Firestore for the document matching the label
        const querySnapshot = await getDocs(
            query(collection(db, 'CMS'), where('label', '==', updates.label))
        );

        if (querySnapshot.empty) {
            throw new Error(`No matching document found for label: ${updates.label}`);
        }

        const imageUrls = []; // To collect the URLs of images

        // Get the current document data (assuming one document matches the label)
        const currentDoc = querySnapshot.docs[0].data();

        // Process images if they are base64 encoded
        for (let i = 1; i <= 20; i++) {
            const imageKey = `image${i}`;
            if (updates[imageKey]) {
                // If image is a valid URL, use it directly
                if (updates[imageKey].startsWith('http')) {
                    imageUrls.push(updates[imageKey]); // Use the provided URL directly
                } else {
                    // Otherwise, upload image to Firebase Storage and get the public URL
                    const imageUrl = await uploadImageToFirebase(
                        `${updates.label}_image${i}`, // File name based on label and image index
                        updates[imageKey]
                    );
                    imageUrls.push(imageUrl); // Store the new image URL
                }
            } else {
                // Use the existing image URL from the current document if no new image provided
                imageUrls.push(currentDoc.images?.[i - 1] || null);
            }
        }

        // Update the document in Firestore with the new text and image URLs
        const updateDocPromises = querySnapshot.docs.map((doc) =>
            updateDoc(doc.ref, {
                text: updates.text || '', // Update text, default to an empty string if not provided
                images: imageUrls.filter(Boolean), // Only keep valid image URLs (remove nulls)
            })
        );

        // Wait for all updates to complete
        await Promise.all(updateDocPromises);

        // Respond with success
        res.send({ message: 'Content updated successfully', imageUrls });
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: `Error updating content: ${error.message}` });
    }
};





// GET /getbloglistgroup - returns all blogs grouped by mainTitle
app.get('/getbloglistgroup', async (req, res) => {
  try {
    const blogsRef = collection(db, 'blogmanagement');
    const q = query(blogsRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const groups = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const groupKey = data.mainTitle || 'Other';
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push({ id: doc.id, ...data });
    });
    res.status(200).json(groups);
  } catch (error) {
    console.error('Error fetching grouped blogs:', error);
    res.status(500).json({ error: 'Error fetching grouped blogs' });
  }
});




// Updated insertBlogContent to handle multipart/form-data with multer
const insertBlogContent = async (req, res) => {
    try {
        const data = req.body;
        const files = req.files;

        // Validate required main fields
        if (!data.mainTitle || !data.mainDescription || !files || !files.mainImage || !files.mainImage[0]) {
            return res.status(400).json({
                error: 'mainTitle, mainDescription, and mainImage are required.'
            });
        }

        // Upload the main image
        const mainImageUrl = await uploadImageToFirebase(
            `blog_main_${Date.now()}`,
            files.mainImage[0].buffer
        );

        // Process 3 sub-sections
        const subSections = [];
        for (let i = 1; i <= 3; i++) {
            const subTitle = data[`subTitle${i}`];
            const subDescription = data[`subDescription${i}`];
            let subImageUrl = '';
            if (files[`subImage${i}`] && files[`subImage${i}`][0]) {
                subImageUrl = await uploadImageToFirebase(
                    `blog_sub${i}_${Date.now()}`,
                    files[`subImage${i}`][0].buffer
                );
            }
            subSections.push({
                title: subTitle || '',
                description: subDescription || '',
                image: subImageUrl
            });
        }

        // Create blog document
        const blogDoc = {
            mainTitle: data.mainTitle,
            mainDescription: data.mainDescription,
            mainImage: mainImageUrl,
            subSections,
            createdAt: new Date()
        };

        // Add to Firestore
        await addDoc(collection(db, 'blogmanagement'), blogDoc);

        res.status(200).json({
            message: 'Blog content inserted successfully.',
            blog: blogDoc
        });

    } catch (err) {
        console.error('Error inserting blog:', err);
        res.status(500).json({
            error: 'Failed to insert blog content.',
            details: err.message
        });
    }
};








// GET /getbloglist - returns all blogs sorted by createdAt (desc)
const getBlogsByDate = async (req, res) => {
  try {
    const blogsRef = collection(db, "blogmanagement");
    const q = query(blogsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });

    console.log("Fetched blogs:", blogs);
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Error fetching blogs" });
  }
};












app.post('/Careers', addCareers);
app.get('/Careers', getCareers);


// Routes for managing Brouchure downloaded
app.post('/data', addBrouchure);
app.get('/data', getBrouchure);

// Routes for managing Contacts
app.post('/Contacts', addContacts);
app.get('/Contacts', getContacts);

// Routes for managing subscribers
app.post('/Subscribers', addSubscribers);
app.get('/Subscribers', getSubscribers);

// Routes for managing queries
app.post('/Queries', addquery);
app.get('/Queries',  getquery);

app.put('/admin',  updateAdmin);
app.get('/admin',  getAdmin);

app.put('/blog/:id', upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'subImage1', maxCount: 1 },
  { name: 'subImage2', maxCount: 1 },
  { name: 'subImage3', maxCount: 1 },
]), updateBlogContent);




app.put('/addcms',updateTextAndImage );
app.get('/getcms/:page',getCms );
app.get('/getbloglist', getBlogsByDate );
app.get('/getcmsAll',getCmsAll );
app.post('/addnewcms', addnewcms)
// Use multer to handle file uploads for blog content
app.post('/insertBlogContent', upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'subImage1', maxCount: 1 },
  { name: 'subImage2', maxCount: 1 },
  { name: 'subImage3', maxCount: 1 },
]), insertBlogContent);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
