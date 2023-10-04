import React, { useRef, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from 'Redux/selectors';
import { setContacts } from 'Redux/actions';

export function App() {
  const dispatch = useDispatch();

  const isLoaded = useRef(false);

  const contacts = useSelector(getAllContacts);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }

    isLoaded.current = true;

    return () => {
      isLoaded.current = false;
    };
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#000000',
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
