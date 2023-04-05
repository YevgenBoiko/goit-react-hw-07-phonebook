import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={event => dispatch(filterContacts(event.target.value))}
        />
      </Label>
    </>
  );
};
