import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const firebaseConfig = {
  apiKey: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: publicRuntimeConfig.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}
