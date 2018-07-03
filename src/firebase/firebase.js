import firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('value', (dataSnapshot)=>{
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').on('child_changed', (dataSnapshot) => {
//     console.log(dataSnapshot.key, dataSnapshot.val())
// })


// database.ref('expenses').once('value').then((dataSnapshot)=>{
//     const expenses = [];
//     dataSnapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });

// database.ref('expenses').push({
//     description: 'beer',
//     note: 'Some note',
//     amount: 46,
//     createdAt: 0
// })

// database.ref().on('value', (dataSnapshot)=>{
//     const data = dataSnapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// })

// database.ref().set({
//     name: 'Mindaugas',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Vilnius',
//         country: 'Lietuva'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed.', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data updated')
// }).catch((error) => {
//     console.log('Something went wrong', error)
// });
