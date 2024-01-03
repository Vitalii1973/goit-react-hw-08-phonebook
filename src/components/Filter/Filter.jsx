import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/contacts/filtersSlice';
import { selectFilter } from '../../redux/contacts/selector';
import {} from './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label className="filter-contact">Find contacts by name </label>
      <input
        id="outlined-search"
        type="search"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter by name"
        className="input"
      />
    </div>
  );
};
export default Filter;
