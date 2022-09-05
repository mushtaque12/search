import { render } from '@testing-library/react';
import NoResult from './index';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/default';

test('renders learn react link', () => {
  render(<ThemeProvider theme={defaultTheme}>
    <NoResult searchTerm={''} />
    </ThemeProvider>);
});
