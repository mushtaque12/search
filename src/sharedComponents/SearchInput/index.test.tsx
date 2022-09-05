import { render, screen } from '@testing-library/react';
import SearchInput from './index';
 
describe('<SearchInput />', () => {
 
  test('render search input', () => {
    render(<SearchInput
      value=''
      onChange = { () => {
        return false;
      } }
    />);
 
    const inputEl = screen.getByTestId('search-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'search');
  });
});