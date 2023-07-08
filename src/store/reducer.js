import { combineReducers } from 'redux';
import { contactsReducer } from './Contacts/ContactSlice';
import { filterReducer } from './Filter/FilterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
