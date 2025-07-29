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
const uploadImageToFirebase = async (filename, imageBuffer) => {
    // Remove base64 prefix if it exists
    const base64Image = imageBuffer.replace(/^data:image\/\w+;base64,/, '');
    let buffer = Buffer.from(base64Image, 'base64'); // Convert to Buffer

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






const insertBlogContent = async (req, res) => {
    try {
        const data = req.body;

        // Validate required main fields
        if (!data.mainTitle || !data.mainDescription || !data.mainImage) {
            return res.status(400).json({
                error: 'mainTitle, mainDescription, and mainImage are required.'
            });
        }

        // Upload the main image
        const mainImageUrl = await uploadImageToFirebase(
            `blog_main_${Date.now()}`,
            data.mainImage
        );

        // Process 3 sub-sections
        const subSections = [];
        for (let i = 1; i <= 3; i++) {
            const subTitle = data[`subTitle${i}`];
            const subDescription = data[`subDescription${i}`];
            const subImageBase64 = data[`subImage${i}`];

            let subImageUrl = '';
            if (subImageBase64) {
                subImageUrl = await uploadImageToFirebase(
                    `blog_sub${i}_${Date.now()}`,
                    subImageBase64
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





app.put('/addcms',updateTextAndImage );
app.get('/getcms/:page',getCms );
app.get('/getbloglist', getBlogsByDate );
app.get('/getcmsAll',getCmsAll );
app.post('/addnewcms', addnewcms)
app.post('/insertBlogContent', insertBlogContent);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
