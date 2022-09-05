import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 60%;
`;

export const NavItem = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding-right: 3em;
  display: inline-block;
  &:hover{
    transform: scale(.97);
    z-index: 100;
    opacity: .8;
  }
  &.active{
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: ${({ theme }) => theme.colors.gold};
    text-decoration-thickness: 6px;
    text-underline-offset: 5px;
  }
`;

