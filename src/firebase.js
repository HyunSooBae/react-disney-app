// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'; // 인증이 필요하면
// import 'firebase/database'; // 데이터베이스가 필요하면
// import 'firebase/storage'; // 스토리지가 필요하면
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiKN5XSl0wtk0-JpareXzh3dUIK-UZtes",
  authDomain: "react-disney-plus-app-7eaf3.firebaseapp.com",
  projectId: "react-disney-plus-app-7eaf3",
  storageBucket: "react-disney-plus-app-7eaf3.appspot.com",
  messagingSenderId: "568856672300",
  appId: "1:568856672300:web:52f38196aeae9c80d73989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;