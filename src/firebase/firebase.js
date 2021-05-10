import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Breakfast',
//     note: 'Veg breakfast',
//     amount: 45.67,
//     createdAt: 5858678
// });



// const firebaseNotes = {
//     notes: {
//         '761ase': {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         'jhffjldoeokd': {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     };
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: "Sumit Samanta",
//         "job/title": "Software Engineer",
//         "job/company": "Google"
//     });
// }, 5000);

// .on() subscribes to any data changes
// database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => console.log("Error fetching data", err));

// database.ref().set({
//     name: 'Amit Samanta',
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Microsoft'
//     },
//     location: {
//         city: 'Chandigarh',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('This failed', err);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => console.log('Remove succeeded.'))
//     .catch((err) => console.log('Remove failed: ' + err.message));