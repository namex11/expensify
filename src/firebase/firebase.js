import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "expensify-65af3.firebaseapp.com",
    databaseURL: "https://expensify-65af3.firebaseio.com",
    projectId: "expensify-65af3",
    storageBucket: "expensify-65af3.appspot.com",
    messagingSenderId: "452403118169"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Mindaugas'
});
