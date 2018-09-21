import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBJDDU6J_plSTGckmTsgwjKYcthxvXiDtE",
    authDomain: "football-dev-606fb.firebaseapp.com",
    databaseURL: "https://football-dev-606fb.firebaseio.com",
    projectId: "football-dev-606fb",
    storageBucket: "football-dev-606fb.appspot.com",
    messagingSenderId: "815133201262"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
};