import { useRouter } from "next/router";
import { LogoutContainer } from "./styles";

export const Logout = () => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    
    router.push("/login");
  };

  return (
    <LogoutContainer onClick={handleClick}>
      <p>Sair</p>
    </LogoutContainer>
  );
};

export default Logout;
