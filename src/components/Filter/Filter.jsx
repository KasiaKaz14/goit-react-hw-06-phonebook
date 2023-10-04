import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { filterContact } from 'Redux/actions';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        name="filter"
        type="text"
        placeholder="Find contact by name"
        onChange={handleFilter}
        filter={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
