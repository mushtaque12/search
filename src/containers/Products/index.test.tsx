import { act, render, screen } from '@testing-library/react';
import Products from './index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/default';
import { GlobalContext } from '../../state';
import { GlobalContent, Product } from 'types/interfaces';
import * as productService from '../../services/products';

const globalContext: GlobalContent = {
  searchTerm: '',
  products: undefined,
  addSearchTerm: jest.fn(),
  addProducts: jest.fn(),
};

describe('Products', () => {
  const mockData: Array<Product> = [
    {
      name: 'some name',
      id: 'some-id',
      description: 'some description',
      imageURL: 'some image url',
      artistName: 'string',
      artworkUrl100: 'string',
      collectionViewUrl: 'string',
    },
  ];

  test('should render with product data', async () => {
    const mockGetProducts = jest.spyOn(productService, 'getProducts').mockReturnValue(Promise.resolve(mockData));

    await act(async () => {
      await render(
        <GlobalContext.Provider value={globalContext}>
          <ThemeProvider theme={defaultTheme}><Products /></ThemeProvider>
        </GlobalContext.Provider>,
      );
    });

    expect(mockGetProducts).toHaveBeenCalledWith('', 10);
  });

  test('should render an error if API returns an error', async () => {
    const mockGetProducts = jest.spyOn(productService, 'getProducts').mockRejectedValue(new Error('some error'));

    await act(async () => {
      await render(
        <GlobalContext.Provider value={globalContext}>
          <ThemeProvider theme={defaultTheme}><Products /></ThemeProvider>
        </GlobalContext.Provider>,
      );
    });

    expect(mockGetProducts).toHaveBeenCalled();
    expect(globalContext.addProducts).not.toHaveBeenCalled();
    expect(screen.getByText('Sorry, something has gone wrong while getting the data.')).toBeInTheDocument();
    expect(screen.getByText('Please try again later.')).toBeInTheDocument();
  });
});
