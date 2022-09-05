import ReactDOM from 'react-dom';

import App from './App';

jest.mock('react-dom', ()=> ({ render: jest.fn() }));


it('renders without crashing', async () => {
  await (() => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  
});