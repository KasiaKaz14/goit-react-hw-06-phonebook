import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});

export const setContacts = createAction('contacts/SET');
export const deleteContact = createAction('contacts/DELETE');
export const filterContact = createAction('contacts/FILTER');
