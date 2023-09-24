import { FormsContainer } from "./styles";

const Forms = () => {
  return (
    <FormsContainer>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha ex: @2345Dufr" />
        <button type="submit">Entrar</button>
      </form>
      <span>Não possui login? <button type="button">Cadastre-se</button></span>
    </FormsContainer>
  );
};

export default Forms;
