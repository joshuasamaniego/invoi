import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAgNCgZoQr7KRPMqNftGAvESI9Emily8fY",
    authDomain: "fir-demo-b7c8f.firebaseapp.com",
    projectId: "fir-demo-b7c8f",
    storageBucket: "fir-demo-b7c8f.appspot.com",
    messagingSenderId: "740626497404",
    appId: "1:740626497404:web:2dc2358e8f7dc878e7aef9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;