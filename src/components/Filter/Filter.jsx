import { setFilter } from 'store/Filter/filersSlice';
import { InputFilter, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from 'store/Filter/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <>
      <Label htmlFor="find">Find contacts by name:</Label>
      <InputFilter
        type="text"
        name="find"
        placeholder="Search..."
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};
