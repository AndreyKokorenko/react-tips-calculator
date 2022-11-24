import { Form } from "./components/Form/Form";
import { Container } from "./styles";
import GlobalStyles from "./GlobalStyles";

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Form />
    </Container>
  );
};
