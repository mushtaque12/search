import { StyledButton } from './styles';

interface Props {
  primary?: boolean;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ buttonText, primary, href, onClick }: Props) => {
  const type = href && 'a';

  return <StyledButton as={type} target="_blank" href={href} primary={primary} onClick={onClick}>{buttonText}</StyledButton>;
};

export default Button;
