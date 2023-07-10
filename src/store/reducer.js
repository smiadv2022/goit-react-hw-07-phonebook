import { combineReducers } from 'redux';
import modalSlice from './Modal/modalsSlice';
import { filterReducer } from './Filter/filersSlice';
import { contactsReducer } from './Contacts/contactsSlice';

export const reducer = combineReducers({
  modal: modalSlice,
  contacts: contactsReducer,
  filter: filterReducer,
});
