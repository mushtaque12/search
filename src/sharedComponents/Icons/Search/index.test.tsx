import { render, screen } from '@testing-library/react';
import SearchIcon from './index';

describe('SearchIcon', () => {
  beforeEach(() => {
    render(
          <SearchIcon />,
    );
  });

  test('Renders a search icon', () => {
    expect(screen.getByLabelText('search-icon')).toBeInTheDocument();
  });
});
