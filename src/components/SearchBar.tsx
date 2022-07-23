import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

const Search = styled.TextInput`
  background: #eff7ff;
  border-radius: 30px;
  height: 40px;
  padding-left: 15px;
`;

const SearchBar = () => {
  const inputRef = React.useRef<TextInput>();
  return (
    <Search
      ref={inputRef}
      placeholder="나의 위드펫을 찾아보세요"
      keyboardType="numeric"
    />
  );
};

export default SearchBar;
