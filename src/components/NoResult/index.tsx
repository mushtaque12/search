import { Container, Item } from './styles';
interface Props {
  searchTerm?: string;
}

const NoResult = ({ searchTerm }: Props) => (
  <Container>
    <h3>No results found for: </h3>
    <ul>
      <Item>Search term: "{searchTerm}"</Item>
    </ul>
    <h5>Suggestions: </h5>
    <ul>
      <Item>Check for typo</Item>
      <Item>Try different keywords</Item>
    </ul>
  </Container>
);

export default NoResult;
