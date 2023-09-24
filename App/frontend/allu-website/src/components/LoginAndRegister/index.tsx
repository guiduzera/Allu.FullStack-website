import Forms from "./Forms";
import { LoginAndRegisterContainer } from "./styles";

const LoginAndRegister = () => {
  return (
    <LoginAndRegisterContainer>
      <div className="frontContainer">
        <div>
         <img src="/logo.png" alt="logo" />
        </div>
        <h1>Seja bem vindo!</h1>
      </div>
      <Forms />
    </LoginAndRegisterContainer>
  );
};

export default LoginAndRegister;