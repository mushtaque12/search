import Error from 'sharedComponents/Icons/Error';
import { Container, InfoPanel, MessageWrapper, TitleWrapper } from './styles';

interface Props {
  messages: string[];
}

const ErrorPanel = ({ messages }: Props) => {
  return (
    <Container>
      <Error size={80} />
      <TitleWrapper>Oops!, something went wrong.</TitleWrapper>
      <InfoPanel>
        {messages.map(message => <MessageWrapper key={message}>{message}</MessageWrapper>)}
      </InfoPanel>
    </Container>
  );
};

export default ErrorPanel;
