import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, SearchContainer } from './styles';
import Nav from '../Nav';
import SearchInput from '../../sharedComponents/SearchInput';
import { GlobalContext } from '../../state';

const Header = () => {
  const { addSearchTerm, searchTerm } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate('/products');
    addSearchTerm(e.target.value);
  };

  return (
    <HeaderContainer>
      <Nav />
      <SearchContainer>
        <SearchInput
          onChange={handleChange}
          value={searchTerm || ''}
        />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
