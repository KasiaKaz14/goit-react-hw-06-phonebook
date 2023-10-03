import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, filter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        name="filter"
        type="text"
        placeholder="Find contact by name"
        onChange={onChange}
        filter={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
