import PropTypes from 'prop-types';
// import s from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input name="filter" type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
