import { FormsContainer } from "./styles";
import { useState } from "react";

interface FormsProps {
  title: string;
  description: string;
  button: string;
}

const Forms = () => {
  const [mode, setMode] = useState(["Login",  "Não possui login?", "Cadastre-se", "Entrar"]);
  const changeMode = () => {
    setMode(mode[0] === "Login" ? ["Cadastro", "Já possui conta?", "Faça login", "Cadastrar"] : ["Login", "Não possui login?", "Cadastre-se", "Entrar"]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <FormsContainer>
      <h2>{mode[0]}</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha ex: @2345Dufr" />
        <button type="submit">{mode[3]}</button>
      </form>
      <span>{mode[1]} <button type="button" onClick={changeMode}>{mode[2]}</button></span>
    </FormsContainer>
  );
};

export default Forms;
