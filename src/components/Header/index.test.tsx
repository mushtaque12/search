import { fireEvent, render, screen } from '@testing-library/react';
import Header from './index';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/default';
import { ContextProvider } from '../../state';
import { ReactElement } from 'react';

const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as ReactElement),
  useNavigate: () => mockedNavigator,
}));

describe('Header', () => {
  beforeEach(() => {
    render(
      <ContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router>
            <Header />
          </Router>
        </ThemeProvider>
      </ContextProvider>,
    );
  });


  test('Renders a search input field', () => {
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  test('Should navigate to products page when typing', () => {
    fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'some value' } });
    expect(mockedNavigator).toHaveBeenCalledWith('/products');
  });
});
