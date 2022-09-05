import { render } from '@testing-library/react';
import SearchCard from './index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/default';
import { Product } from 'types/interfaces';

test('renders SearchCard', () => {
  const item: Product = {
    name: 'some name',
    imageURL: 'some-url.com',
    hidden: false,
    id: 'some-id-1',
    description: 'Some description',
    artistName: 'string',
    artworkUrl100: 'string',
    collectionViewUrl: 'string',
  };

  render(<ThemeProvider theme={defaultTheme}>
    <SearchCard item={item} />
  </ThemeProvider>);
});
