import { combineReducers } from 'redux';

// import { modalReducer } from './Modal/modalSlice';
// import { contactsReducer } from './Contacts/contactSlice';
// import { filterReducer } from './Filter/filterSlice';
import { modalReducer } from './Modal/modalSlice';
import { contactsReducer } from './Contacts/contactSlice';
import { filterReducer } from './Filter/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});
