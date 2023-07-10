import { combineReducers } from 'redux';
import modalSlice from './modal/modalSlice';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactSlice';

export const reducer = combineReducers({
  modal: modalSlice,
  contacts: contactsReducer,
  filter: filterReducer,
});
