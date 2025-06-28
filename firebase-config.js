// استيراد الوظائف من Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعدادات مشروعك في Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCj5YjdiruBTCfxDnxlDd4W6YA5iCWRfE4",
  authDomain: "home-services-app-a9c5e.firebaseapp.com",
  projectId: "home-services-app-a9c5e",
  storageBucket: "home-services-app-a9c5e.appspot.com",
  messagingSenderId: "287028219636",
  appId: "1:287028219636:web:2ad4b0e092a2c007e318a1"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة قاعدة بيانات Firestore
export const db = getFirestore(app);
