import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAH_Up_tFbAJpSEcYbNuSZ_G2ZHl8Q4M7M",
  authDomain: "codecov-86580.firebaseapp.com",
  projectId: "codecov-86580",
  storageBucket: "codecov-86580.appspot.com",
  messagingSenderId: "260459506202",
  appId: "1:260459506202:web:57164cb08db791148c3fa3"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)