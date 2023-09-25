/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { ProductDetailContainer } from "./styles";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "@/context/cartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/environments/urls";

const ProductDetail = () => {
  const router = useRouter();
  const [research, setResearch] = useContext(CartContext);
  const [product, setProduct] = useState({ image: "", name: "", description: "", price: 0, id: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

    const getProduct = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/products/byId/${router.query.id}`,
          {
            headers: {
              authorization: token,
            },
          }
        );

        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    };

    getProduct();
  }, []);

  const handleAddToCart = () => {
    //nutrir o LocalStorage
    const stringCart = localStorage.getItem("cart");

    const cart = JSON.parse(stringCart || "{}");

    if (cart.length === 0) {
      const cartParsed = JSON.stringify([{ ...product, quantity: 1 }]);

      localStorage.setItem("cart", cartParsed);
      setResearch(!research);
    } else {
      //verificar se o produto já está no carrinho
      const productIndex = cart.findIndex((item: any) => item.id === product.id);
      //se não estiver, adicionar
      if (productIndex === -1) {
        const cartParsed = JSON.stringify([
          ...cart,
          { ...product, quantity: 1 },
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
  };

  return (
    <ProductDetailContainer>
      <div className="imageContainer">
        <img src={product.image}
        alt="Product Photo" />
      </div>
      <div className="contentContainer">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id="price">R$ {product.price}</p>
        <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
        <BsFillArrowLeftCircleFill className="turnBackButton" size={40} onClick={() => router.push('/products')} />
      </div>
    </ProductDetailContainer>
  )
}

export default ProductDetail;
