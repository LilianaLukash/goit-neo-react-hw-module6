// contactsSlice.js

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('contacts')) || [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state.items));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.items));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;
