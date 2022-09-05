import { render } from '@testing-library/react';
import Nav from './index';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/default';

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Nav />
      </Router>
    </ThemeProvider>,
  );
});
