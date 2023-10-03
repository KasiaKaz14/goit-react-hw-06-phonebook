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

export const setFilter = createAction('filters/SET');

export const deleteContact = createAction('contacts/DELETE');
