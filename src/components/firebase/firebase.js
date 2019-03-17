import app from 'firebase/app'

const config = {
  apiKey: 'AIzaSyDIyBu1Q_KtbWzjAPZacZhRhTHTHmsrVTo',
  authDomain: 'react-firebase-authentic-29ea5.firebaseapp.com',
  databaseURL: 'https://react-firebase-authentic-29ea5.firebaseio.com',
  projectId: 'react-firebase-authentic-29ea5',
  storageBucket: 'react-firebase-authentic-29ea5.appspot.com',
  messagingSenderId: '425558599607'
}

class Firebase {
  constructor() {
    app.initializeApp(config)
  }
}

export default Firebase
