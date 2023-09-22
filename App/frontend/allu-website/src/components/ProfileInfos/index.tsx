import ProductCard from "./ProductCard";
import { Container } from "./styles";

/* eslint-disable @next/next/no-img-element */
const ProfileInfos = () => {
	const user = 'Guilherme'
  return (
    <Container>
			<div className="titleContainer">
				<img src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg" alt="user image" />
				<h1>Olá, { user }!</h1>
			</div>
			<div className="productContainer">
				<h2>Minhas Assinaturas</h2>
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
    </Container>
  );
};

export default ProfileInfos;
