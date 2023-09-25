import axios from "axios";
import { FormsContainer } from "./styles";
import { useState } from "react";
import toast from "react-hot-toast";
import theme from "@/styles/theme";
import { useRouter } from "next/router";
import { SECURITY_URL } from "@/environments/urls";

const Forms = () => {
  const router = useRouter();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({ name: "", email: "", password: "" });
  const [mode, setMode] = useState(["Login",  "Não possui login?", "Cadastre-se", "Entrar", false]);

  const changeMode = () => {
    setMode(mode[0] === "Login" ? ["Cadastro", "Já possui conta?", "Faça login", "Cadastrar", true] : ["Login", "Não possui login?", "Cadastre-se", "Entrar", false]);
  };

  const handleChange = (e: any) => {
    if (mode[0] === "Login") {
      setLogin({ ...login, [e.target.placeholder]: e.target.value });
    } else {
      setRegister({ ...register, [e.target.placeholder]: e.target.value });
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (mode[0] === "Login") {
      const { email, password } = login;
      if (!email.trim() || !password.trim()) {
        toast.error('Preencha todos os campos para logar', {
          style: {
            background: theme.error,
            color: '#fff'
          }
        });
        return;
      }
      try {
        const response = await axios.post(`${SECURITY_URL}/security/login`, login);
        const { token } = response.data;
        // salvar o token no localstorage
        localStorage.setItem("token", token);
        router.push("/");
      } catch (e) {
        console.log(e);
        // @ts-ignore
        toast.error(e.message, {
          style: {
            background: theme.error,
            color: '#fff'
          }
        });
      }

    } else {
      const { name, email, password } = register;
      if (!name.trim() || !email.trim() || !password.trim()) {
        toast.error('Preencha todos os campos para cadastrar', {
          style: {
            background: theme.error,
            color: '#fff'
          }
        });
        return;
      }
      try {
        const response = await axios.post(`${SECURITY_URL}/security/register`, register);
        const { token } = response.data;
        // salvar o token no localstorage
        localStorage.setItem("token", token);
        router.push("/");
      } catch (e) {
        console.log(e);
        // @ts-ignore
        toast.error(e.message, {
          style: {
            background: theme.error,
            color: '#fff'
          }
        });
      }
    }
  };

  return (
    <FormsContainer>
      <h2>{mode[0]}</h2>
      <form onSubmit={handleSubmit}>
        { mode[4] && <input type="text" placeholder="name" onChange={handleChange} />}
        <input type="email" placeholder="email" onChange={handleChange} />
        <input type="password" placeholder="password" onChange={handleChange} />
        <button type="submit">{mode[3]}</button>
      </form>
      <span>{mode[1]} <button type="button" onClick={changeMode}>{mode[2]}</button></span>
    </FormsContainer>
  );
};

export default Forms;
