import styled from 'styled-components';

export const NumberContainer = styled.div`
  margin: 0 30px;
  font-weight: 600;
  height: 2em;
  width: 30em;
  margin-top: 40px;
  position: relative;
  color: ${({ theme }) => theme.colors.graphite};
`;

export const ErrorPanelWrapper = styled.div`
  padding-top: 10rem;
`;