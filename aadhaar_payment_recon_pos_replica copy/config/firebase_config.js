import { initializeApp } from 'firebase/app';

// Initialize Firebase
export function initializeFirebaseInstance() {
    const firebaseConfig = {
        apiKey: "AIzaSyCk-BKb1SM2q8iCLIj30agySYhhshFHR6k",
        authDomain: "aadhaar-payment-recon.firebaseapp.com",
        projectId: "aadhaar-payment-recon",
        storageBucket: "aadhaar-payment-recon.appspot.com",
        messagingSenderId: "906767328503",
        appId: "1:906767328503:web:fc626ca1ff12b69d781ff2",
        measurementId: "G-LCD4E4D04C"
    };

    initializeApp(firebaseConfig);
}
