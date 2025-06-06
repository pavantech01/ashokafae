const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

const initializeFirebase = () => {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        })
    });
};

module.exports = initializeFirebase;
