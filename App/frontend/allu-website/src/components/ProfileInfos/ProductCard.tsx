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

    const cart = JSON.parse(stringCart || "");

    if (cart.length === 0) {
      const cartParsed = JSON.stringify([
        {
          id: 1,
          quantity: 1,
          price: 15000,
          name: "Iphone 15 pro max",
          image: "data:image/jpeg;base64,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",
        },
      ]);

      localStorage.setItem("cart", cartParsed);
      setResearch(!research);
    } else {
      const newCart = cart.map((item: any) => {
        if (item.id === 1) {
          item.quantity += 1;
          return item;
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(newCart));
      setResearch(!research);
    }
  };

  const handleSpanClick = () => {
    if (spanPhrase === "Assinar") {
      handlerCartClick();
      router.push("/checkout");
    }

    return;
  };

  return (
    <CardContainer $status="active" $show={ showSpan }>
      <div className="productInfosContainer">
        <h1>{name}</h1>
        <span onClick={handleSpanClick}>{spanPhrase}</span>
        {!profile && (<AiOutlineShoppingCart size={30} style={{
          position: "absolute",
          bottom: "10px",
          left: "80px",
        }} className="cartLogo" id='cart' onClick={handlerCartClick} />)}
        <p className="nowMore" onClick={() => router.push(`/details/${id}`)}>Saiba mais<BsArrowRightShort /></p>
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
