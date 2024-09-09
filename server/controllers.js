'use strict';

const db = require('./db');
const { collection, addDoc, getDocs, doc, updateDoc,query, where, writeBatch  } = require('firebase/firestore');
const Careers = require('./models/careers');
const Contacts = require('./models/contacts');
const Subscribers = require('./models/subscribers');
const Query = require('./models/querys');








// Add Career
const addCareers = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, 'careers'), data);
        res.send('Career added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get Careers
const getCareers = async (req, res) => {
    try {
        const careersCollection = collection(db, 'careers');
        const careerSnapshot = await getDocs(careersCollection);
        const careerArray = [];

        if (careerSnapshot.empty) {
            res.status(404).send('No careers found');
        } else {
            careerSnapshot.forEach(doc => {
                const careers = doc.data();
                const career = new Careers(
                    careers.name,
                    careers.email,
                    careers.experiences,
                    careers.phonenumber,
                    careers.message,
                    careers.resume
                );
                careerArray.push(career);
            });
            res.status(200).send(careerArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Add Contact
const addContacts = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, 'contacts'), data);
        res.send('Contact added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get Contacts
const getContacts = async (req, res) => {
    try {
        const contactsCollection = collection(db, 'contacts');
        const contactSnapshot = await getDocs(contactsCollection);
        const contactArray = [];

        if (contactSnapshot.empty) {
            res.status(404).send('No contacts found');
        } else {
            contactSnapshot.forEach(doc => {
                const contact = doc.data();
                const contacts = new Contacts(
                    contact.fullname,
                    contact.email,
                    contact.street,
                    contact.city,
                    contact.postalcode,
                    contact.phonenumber,
                    contact.message
                );
                contactArray.push(contacts);
            });
            res.status(200).send(contactArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Add Subscriber
const addSubscribers = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, 'subscribers'), data);
        res.send('Subscriber added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get Subscribers
const getSubscribers = async (req, res) => {
    try {
        const subscribersCollection = collection(db, 'subscribers');
        const subscribersSnapshot = await getDocs(subscribersCollection);
        const subscribersArray = [];

        if (subscribersSnapshot.empty) {
            res.status(404).send('No subscribers found');
        } else {
            subscribersSnapshot.forEach(doc => {
                const subscriber = doc.data();
                const subscriberData = new Subscribers(
                    subscriber.email
                );
                subscribersArray.push(subscriberData);
            });
            res.status(200).send(subscribersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Add Query
const addquery = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, 'querys'), data);
        res.send('Query added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Get Queries
const getquery = async (req, res) => {
    try {
        const queryCollection = collection(db, 'querys');
        const querySnapshot = await getDocs(queryCollection);
        const queryArray = [];

        if (querySnapshot.empty) {
            res.status(404).send('No queries found');
        } else {
            querySnapshot.forEach(doc => {
                const query = doc.data();
                const queryData = new Query(
                    query.name,
                    query.phonenumber,
                    query.messages
                );
                queryArray.push(queryData);
            });
            res.status(200).send(queryArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const updateAdmin = async (req, res) => {
    try {
        const { adminId, newPassword } = req.body;

        if (!adminId || !newPassword) {
            return res.status(400).send('Admin ID and new password are required.');
        }

        // Create a query to find the document where the `adminId` field matches
        const adminQuery = query(collection(db, 'admin'), where('adminid', '==', adminId));
        const querySnapshot = await getDocs(adminQuery);

        if (querySnapshot.empty) {
            return res.status(404).send('Admin not found.');
        }

        // Create a write batch
        const batch = writeBatch(db);

        // Update the password for the matching document(s)
        querySnapshot.forEach(doc => {
            const adminRef = doc.ref;
            batch.update(adminRef, { password: newPassword });
        });

        // Commit the batch
        await batch.commit();

        res.send('Admin updated successfully.');
    } catch (error) {
        res.status(400).send(`Error updating admin: ${error.message}`);
    }
};

const getAdmin = async (req, res) => {
    try {
        // Create a reference to the admin collection
        const adminCollection = collection(db, 'admin');
        
        // Get all documents from the collection
        const adminSnapshot = await getDocs(adminCollection);

        if (adminSnapshot.empty) {
            return res.status(404).send('No admins found.');
        }

        // Extract data from the documents
        const adminsArray = [];
        adminSnapshot.forEach(doc => {
            adminsArray.push(doc.data());
        });

        res.status(200).send(adminsArray);
    } catch (error) {
        res.status(400).send(`Error fetching admins: ${error.message}`);
    }
};



module.exports = {
    addCareers,
    getCareers,
    addContacts,
    getContacts,
    addSubscribers,
    getSubscribers,
    addquery,
    getquery,
    updateAdmin,
    getAdmin
};
