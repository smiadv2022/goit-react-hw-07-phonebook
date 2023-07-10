import { combineReducers } from 'redux';
import { contactsReducer } from './Contacts/ContactSlice';
import { filterReducer } from './Filter/FilterSlice';
import { modalReducer } from './Modal/ModalSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});
