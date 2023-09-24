import LoginAndRegister from "@/components/LoginAndRegister";
import { LoginContainer } from "@/styles/loginStyles";
import Head from "next/head";

export default function Login() {
  return (
    <LoginContainer>
      <Head>
        <title>Allu | Login</title>
        <meta name="description" content="Login ou cadastro do usuário" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <LoginAndRegister />
    </LoginContainer>
  );
}
