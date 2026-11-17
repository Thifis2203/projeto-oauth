import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHtMKhcnxf1CIaOxv1pS9dedsX5VIcrv0",
    authDomain: "atividade-oauth-544b7.firebaseapp.com",
    projectId: "atividade-oauth-544b7",
    storageBucket: "atividade-oauth-544b7.firebasestorage.app",
    messagingSenderId: "597997302587",
    appId: "1:597997302587:web:a3f19f0d2c69047903bd1e"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
