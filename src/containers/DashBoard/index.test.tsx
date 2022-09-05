import { act, render } from '@testing-library/react';
import DashBoard from './index';

describe('DashBoard', () => {
  test('renders DashBoard and gets product groups', async () => {

    await act(async () => {
      await render(
          <DashBoard />,
      );
    });

  });

});
