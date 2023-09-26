import { useRouter } from "next/router";
import { CardContainer } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "@/context/cartContext";
import { BsArrowRightShort } from "react-icons/bs";

interface ProductCardProps {
  id: number;
  showSpan: boolean;
  spanPhrase: string;
  profile: boolean;
  name: string;
  quantity: number;
  total: number;
  image: string;
}

/* eslint-disable @next/next/no-img-element */
const ProductCard = ({ showSpan, spanPhrase, profile, name, total, quantity, image, id }: ProductCardProps) => {
  const router = useRouter();
  const [research, setResearch] = useContext(CartContext);

  const handlerCartClick = () => {
    //nutrir o LocalStorage
    const stringCart = localStorage.getItem("cart");

    const cart = JSON.parse(stringCart || "{}");

    if (cart.length === 0) {
      const cartParsed = JSON.stringify([{ name, image, id, price: total, quantity: 1 }]);

      localStorage.setItem("cart", cartParsed);
      setResearch(!research);
    } else {
      //verificar se o produto já está no carrinho
      const productIndex = cart.findIndex((item: any) => item.id === id);
      //se não estiver, adicionar
      if (productIndex === -1) {
        const cartParsed = JSON.stringify([
          ...cart,
          { name, image, id, price: total, quantity: 1 },
        ]);

        localStorage.setItem("cart", cartParsed);
        setResearch(!research);
      } else {
        //se estiver, aumentar a quantidade
        const cartParsed = JSON.stringify([
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ]);

        localStorage.setItem("cart", cartParsed);
        setResearch(!research);
      }
    }
  }

  const handleSpanClick = () => {
    if (spanPhrase === "ass.") {
      handlerCartClick();
      router.push("/checkout");
    }

    return;
  };

  return (
    <CardContainer $status="active" $show={ showSpan }>
      <div className="productInfosContainer">
        <h1>{name}</h1>
        <span onClick={handleSpanClick} style={{ cursor: "pointer" }}> {spanPhrase}</span>
        {!profile && (<AiOutlineShoppingCart size={30} style={{
          position: "absolute",
          bottom: "10px",
          left: "80px",
          cursor: "pointer",
        }} className="cartLogo" id='cart' onClick={handlerCartClick} />)}
        <p className="nowMore" onClick={() => router.push(`/details/${id}`)} style={{ cursor: "pointer" }}>Saiba mais<BsArrowRightShort /></p>
        {profile && (<p>quantidade: {quantity}</p>)}
        <p>R$ {total}</p>
      </div>
      <div className="imageContainer">
        <img
          src={image}
          alt="product image"
        />
      </div>
    </CardContainer>
  );
};

export default ProductCard;
