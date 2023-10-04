import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'Redux/selectors';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'Redux/actions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <div>
      {contacts.length ? (
        <ul className={css.list}>
          {contacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.deleteButton}
                onClick={() => dispatch(deleteContact(contact.id))}
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
  onClick: PropTypes.func.isRequired,
};
