'use strict';

const db = require('./db');
const { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where,arrayUnion } = require('firebase/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const User = require('./models/user');

const adduser = async (req, res, next) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, 'user'), data);
        res.send('Food item added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};



const userOrderedItems = async (req, res, next) => {
    const userId = req.params.id; // Get the user ID from the request parameters

    try {
        const studentQuery = query(collection(db, 'user'), where('userid', '==', userId));
        const studentSnapshot = await getDocs(studentQuery);

        if (studentSnapshot.empty) {
            return res.status(404).send('User not found');
        } else {
            let foodArray = [];
            studentSnapshot.forEach(doc => {
                const details = doc.data(); // Correctly access document data
                foodArray = details.foodarray 
            });

            return res.status(200).json(foodArray); // Return JSON data
        }
    } catch (error) {
        console.error('Error fetching food array:', error); // Log error for debugging
        return res.status(400).send(error.message);
    }
};




// POST endpoint to add multiple food items to user's foodArray
const addFoodItemsToUser = async (req, res, next) => {
    const userId = req.params.id; // Get the user ID from the request parameters
    const foodItems = req.body.foodItems; // Get array of food items from request body

    if (!Array.isArray(foodItems)) {
        return res.status(400).json({ error: 'Invalid request', message: 'foodItems should be an array' });
    }

    try {
        // Query the user's document
        const userQuery = query(collection(db, 'user'), where('userid', '==', userId));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
            return res.status(404).send('User not found');
        } else {
            let userDocId;
            userSnapshot.forEach(doc => {
                userDocId = doc.id; // Get the document ID
            });

            const userDocRef = doc(db, 'user', userDocId);

            // Update the user's foodArray with the new food items
            const updates = foodItems.map(item => arrayUnion(item));
            await updateDoc(userDocRef, {
                foodarray: arrayUnion(...foodItems)
            });

            return res.status(200).json({ message: 'Food items added successfully' });
        }
    } catch (error) {
        console.error('Error adding food items:', error); // Log error for debugging
        return res.status(400).send(error.message);
    }
};


const users = async (req, res, next) => {
    try {
        const foodCollection = collection(db, 'user');
        const foodSnapshot = await getDocs(foodCollection);
        const foodArray = [];
        
        if (foodSnapshot.empty) {
            res.status(404).send('No food items found');
        } else {
            foodSnapshot.forEach(doc => {
                const details = doc.data(); // Correctly access document data
                const student = new User(details.userid, details.username, details.email,details.phonenumber,details.location,details.image,details.foodArray);
                foodArray.push(student);
            });
            res.send(foodArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const userCity = async (req, res, next) => {
    try {
        const city = req.params.id;
        console.log(`city from params: ${city}`);
        const studentQuery = query(collection(db, 'food'), where('city', '==', city));
        const studentSnapshot = await getDocs(studentQuery);

        if (studentSnapshot.empty) {
            console.log('No matching documents found.');
            res.status(404).send('No food items found for the given city');
        } else {
            const studentsData = [];
            studentSnapshot.forEach(doc => {
                studentsData.push({ id: doc.id, ...doc.data() });
            });
            console.log('Matching documents found:', studentsData);
            res.send(studentsData);
        }
    } catch (error) {
        console.error('Error fetching food items:', error.message);
        res.status(400).send(error.message);
    }
};










const getuser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(`ID from params: ${id}`);
        const studentQuery = query(collection(db, 'food'), where('resturentid', '==', id));
        const studentSnapshot = await getDocs(studentQuery);

        if (studentSnapshot.empty) {
            console.log('No matching documents found.');
            res.status(404).send('No food items found for the given ID');
        } else {
            const studentsData = [];
            studentSnapshot.forEach(doc => {
                studentsData.push({ id: doc.id, ...doc.data() });
            });
            console.log('Matching documents found:', studentsData);
            res.send(studentsData);
        }
    } catch (error) {
        console.error('Error fetching food items:', error.message);
        res.status(400).send(error.message);
    }
};

const updateuser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        
        // Query the documents where the 'foodid' field matches the provided ID
        const foodQuery = query(collection(db, 'user'), where('userid', '==', id));
        const foodSnapshot = await getDocs(foodQuery);

        if (foodSnapshot.empty) {
            console.log('No matching documents found.');
            return res.status(404).send('No food items found for the given ID');
        }

        // Update all matching documents
        const batchPromises = [];
        foodSnapshot.forEach(docSnapshot => {
            const docRef = doc(db, 'food', docSnapshot.id);
            batchPromises.push(updateDoc(docRef, data));
        });

        await Promise.all(batchPromises);
        res.send('Food item(s) updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteuser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await deleteDoc(doc(db, 'user', id));
        res.send('Food item deleted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    adduser,
    users,
    getuser,
    updateuser,
    deleteuser,
    userCity,
    userOrderedItems,
    addFoodItemsToUser
};
