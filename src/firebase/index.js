import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvxsv9TgHH9XSOfCHytN1rq86BHqzaReE',
  authDomain: 'chat-4f047.firebaseapp.com',
  projectId: 'chat-4f047',
  storageBucket: 'chat-4f047.appspot.com',
  messagingSenderId: '317661347940',
  appId: '1:317661347940:web:77172bd29d0dfe56cf1f71'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
  db,
  app
}
