import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAVEEx7zMQb4v7fBIVOb3WekjwliA-Llr4',
	authDomain: 'mockwise-736be.firebaseapp.com',
	projectId: 'mockwise-736be',
	storageBucket: 'mockwise-736be.firebasestorage.app',
	messagingSenderId: '387235245593',
	appId: '1:387235245593:web:538bf5e3ec23d43b76c488',
	measurementId: 'G-25J59N906L',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
