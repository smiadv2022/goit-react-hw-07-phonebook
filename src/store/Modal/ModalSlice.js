import { createSlice } from '@reduxjs/toolkit';
import { initialModal } from './initialModal';

const modalSlice = createSlice({
  name: 'isModal',
  initialState: initialModal,
  reducers: {
    modalOpen(state, action) {
      return true;
    },
    modalClose(state, action) {
      return false;
    },
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
