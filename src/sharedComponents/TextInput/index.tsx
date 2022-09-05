import { TextField } from './styles';

interface Props {
  dataTestId?: string;
  value?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ value, label, name, placeholder, type, onChange, dataTestId }: Props) => (
  <TextField>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      data-testid={dataTestId}
      type={type}
      value={value}
      name={name}
      className="input-field"
      placeholder={placeholder}
      onChange={onChange}
    />
  </TextField>
);

export default TextInput;