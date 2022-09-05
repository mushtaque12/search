import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.graphite};
  padding-left: 1em;
  width: 98%;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const H3 = styled.h3`
  font-size: 1.2em;
  width: 70%;
  margin: 0;
  color: ${({ theme }) => theme.colors.blue};
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    &:hover {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

export const H4 = styled.h4`
  margin: 0;
  font-size: .9em;
  font-weight: 500;
  width: 15em;
  padding-bottom: .5em;
  color: ${({ theme }) => theme.colors.graphite};
`;

export const P = styled.p`
  margin: 0;
  font-size: .9em;
  padding-bottom: 1em;
  color: ${({ theme }) => theme.colors.graphite};
  white-space: break-spaces;
`;

export const TitlesWrapper = styled.div`
  flex-flow: row wrap;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 1em 0;
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Buttons = styled.div`
  opacity: 0;
  transition: .5s ease-in-out;
`;

export const Item = styled.div`
margin: 0;
padding: 30px 0;
border-color: rgb(236, 237, 243);
border-radius: 8px;
border: 1px solid rgb(236, 237, 243);
box-sizing: border-box;
display: flex;
transition: 0.5s ease-in-out;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(16, 24, 40, 0.1) 0px 20px 24px -4px, rgba(16, 24, 40, 0.04) 0px 8px 8px -4px;
  }
  &:hover ${Buttons} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  box-shadow: 10px 10px 5px -4px rgba(196,190,196,.6);

  background: linear-gradient(0deg, rgba(254,254,255,1) 6%, rgba(200,200,204,1) 100%);
`;

export const TitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const RightColumn = styled.div`
  padding-left: 20px;
  width: 100%;
`;
