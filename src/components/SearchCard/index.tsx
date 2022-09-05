import { Product } from 'types/interfaces';
import { Container, H3, P, Image, Item, TitleButton, RightColumn } from './styles';


const SearchCard = ({ item }: { item: Product }) => (
  <Container>
    <Item>
      <a href={item.artistName} target="_blank">
        <Image src={item.artworkUrl100} />
      </a>
      <RightColumn>
        <TitleButton>
          <H3>
            <a href={item.collectionViewUrl} target="_blank">
              {item.artistName}
            </a>
          </H3>
        </TitleButton>
        <P>{item.description}</P>

      </RightColumn>
    </Item>
  </Container>
);

export default SearchCard;
