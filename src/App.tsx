import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';
import { ContextProvider } from './state';
import { AppRoutes } from './routes';
import Header from 'components/Header';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <ThemeProvider theme={defaultTheme}>
            <Header />
            {AppRoutes}
          </ThemeProvider>
        </ContextProvider>
      </BrowserRouter>    
  </div>
);

export default App;
