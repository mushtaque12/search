import { render } from '@testing-library/react';
import TextInput from './index';

test('renders text input', () => {
  render(<TextInput
    value=''
    label='Input'
    name='Input'
    placeholder='Input'
    type='text'
    onChange = { () => {
      return false;
    } }
  />);
});
