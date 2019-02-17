import dataReducer from './dataReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  data: dataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
export default rootReducer;
