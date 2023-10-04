import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export const ContactList = ({ contacts, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`${deleteContact.name} has been removed`);
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
                onClick={() => handleDelete(contact.id)}
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
  handleDelete: PropTypes.func.isRequired,
};
