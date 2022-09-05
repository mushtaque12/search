import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 6em;
  background-color: ${({ theme }) => theme.colors.blue};
  background: linear-gradient(#830051,);
  box-shadow: 2px 2px 2px 2px #ccc;
  display: flex;
  gap: 2em;
  padding: 0 2em;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 4rem;
  width: 150px;
  height: 100px;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledText = styled.div`
  color: #c4d82e;
  white-space: nowrap;
`;
