import TextInput from '../../sharedComponents/TextInput';
import Search from '../Icons/Search';
import { SearchField, Icon } from './styles';

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const SearchInput = ({ onChange, value }: Props) => (
  <SearchField>
    <Icon> <Search /> </Icon>
    <TextInput
      dataTestId='search-input'
      name='Search'
      type='search'
      value={value}
      onChange={onChange}
    />
  </SearchField>

);

export default SearchInput;