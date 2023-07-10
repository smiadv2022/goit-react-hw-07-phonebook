import { combineReducers } from 'redux';
import { contactsReducer } from './Contacts/contactSlice';
import { filterReducer } from './Filter/filterSlice';
import { modalReducer } from './Modal/modalSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});
