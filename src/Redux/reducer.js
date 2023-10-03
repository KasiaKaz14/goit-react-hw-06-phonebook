import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitial = [];

export const contactsReducer = createReducer(contactsInitial, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contacts => contacts.id !== action.payload);
  },
});

const filterInitial = '';

export const filterReducer = createReducer(filterInitial, {
  [setFilter]: (_, action) => {
    return action.payload;
  },
});
