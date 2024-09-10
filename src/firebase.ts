// src/firebase.ts
'use client'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
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
