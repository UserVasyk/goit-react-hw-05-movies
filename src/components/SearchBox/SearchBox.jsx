import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputStyled,
  FormStyled,
  ButtonSubmitStyled,
} from './SearchBox.styled';
export const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const OnHandleChange = e => {
    setSearchQuery(e.target.value);
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };
  return (
    <FormStyled onSubmit={onHandleSubmit}>
      <InputStyled
        required
        minLength="1"
        placeholder="Search movies"
        type="text"
        onChange={OnHandleChange}
      />

      <ButtonSubmitStyled type="submit">Search</ButtonSubmitStyled>
    </FormStyled>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
