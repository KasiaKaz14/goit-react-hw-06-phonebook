import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {contacts.length ? (
        <ul className={css.list}>
          {contacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.deleteButton}
                onClick={() => handleDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
};
