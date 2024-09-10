// src/firebase.ts
'use client'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-ooWc2fG_1CtGsftbDbtgmai6sqznhbc',
  authDomain: 'robo-mail-7fd07.firebaseapp.com',
  projectId: 'robo-mail-7fd07',
  storageBucket: 'robo-mail-7fd07.appspot.com',
  messagingSenderId: '654471593545',
  appId: '1:654471593545:web:5be197c69ecb4b6204c998',
  measurementId: 'G-K506C7TJ15'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// Initialize Firebase Analytics, ensuring it runs only on the client side

export const initFirebaseAnalytics = async () => {
  if (typeof window !== 'undefined') {
    const analyticsSupported = await isSupported()
    if (analyticsSupported) {
      const analytics = getAnalytics(app)
      return analytics
    }
  }
  return null
}
