import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyDy6APo1ip-XMgGvv4fddYMSolvnjxxs_Q',
  authDomain: 'duan-325304.firebaseapp.com',
  projectId: 'duan-325304',
  storageBucket: 'duan-325304.appspot.com',
  messagingSenderId: '945074838999',
  appId: '1:945074838999:web:9a1387d7b0df1641523f92',
  measurementId: 'G-N93BDWY1KR',
};
// Initialize Firebase
initializeApp(firebaseConfig);
var storage = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

export default storage;
