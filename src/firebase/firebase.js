import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdPkp7MVKZ5fTgyPX5_WhR-825HjqV28M",
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