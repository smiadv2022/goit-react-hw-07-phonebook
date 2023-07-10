import { combineReducers } from 'redux';
import { modalReducer } from './modal/modalSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  modal: modalReducer,
});
