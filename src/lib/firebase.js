import firebase from 'firebase/app'
import 'firebase/storage'
import { firebaseConfig } from '../config'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const storage = firebase.storage()

export default firebase
