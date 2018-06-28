import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "expensify-65af3.firebaseapp.com",
    databaseURL: "https://expensify-65af3.firebaseio.com",
    projectId: "expensify-65af3",
    storageBucket: "expensify-65af3.appspot.com",
    messagingSenderId: ""
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (dataSnapshot)=>{
    const data = dataSnapshot.val();
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
})

// database.ref().set({
//     name: 'Mindaugas',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
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
