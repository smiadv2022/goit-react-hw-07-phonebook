import { createSlice } from '@reduxjs/toolkit';

// import { contactsInitialState } from './contactInit';
import { addContact, deleteContact, fetchContacts } from 'store/operations';
import { contactsInitialState } from './contactInit';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledFetch = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(payload);
};

const handleFulfilledRemove = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.contacts.findIndex(contact => contact.id === payload.id);
  state.contacts.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFulfilledFetch,
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: handleFulfilledAdd,
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: handleFulfilledRemove,
    [deleteContact.rejected]: handleRejected,
  },
});
export const contactsReducer = contactsSlice.reducer;
