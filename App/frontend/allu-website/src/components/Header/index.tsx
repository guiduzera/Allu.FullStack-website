import LinkHeader from "./LinkHeader";
import { Container } from "./styles";

/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <Container>
      <img src="/logo.png" alt="Allu Logo" />
      <ul>
        <LinkHeader title="Perfil" path="/" />
        <LinkHeader title="Loja" path="/products" includes />
      </ul>
    </Container>
  );
};

export default Header;
