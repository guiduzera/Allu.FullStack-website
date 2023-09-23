import { useEffect, useState, useContext } from "react";
import { ChackoutContainer, FinishContainer } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import DragAndDrop from "./DragAndDrop";
import CartContext from "@/context/cartContext";


export const CheckoutComponent = () => {
  const router = useRouter();
  const [research, setResearch] = useContext(CartContext)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    //captar o localstorage
    const localCart = localStorage.getItem("cart");

    if (!localCart) return;

    const cart = JSON.parse(localCart || "[]");

    if (cart.length === 0) {
      router.push("/products");
    }

    if (cart.length > 0) {
      calcTotal();
    }

    setCart(cart);
  }, [research]);

  const handleAdd = (id: number) => {
    const localCart = localStorage.getItem("cart");

    if (!localCart) return;

    const cart = JSON.parse(localCart);
    const newCart = cart.map((item: any) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setResearch(!research)
  };

  const handleRemove = (id: number) => {
    const localCart = localStorage.getItem("cart");

    if (!localCart) return;

    const cart = JSON.parse(localCart);
    const newCart = cart.map((item: any) => {
      if (item.id === id) {
        item.quantity -= 1;
      }
      return item;
    });

    if (newCart.some((item: any) => item.quantity === 0)) {
      handleDelete(id);
      return;
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setResearch(!research)
  };

  const handleDelete = (id: number) => {
    const localCart = localStorage.getItem("cart");

    if (!localCart) return;

    const cart = JSON.parse(localCart);
    const newCart = cart.filter((item: any) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setResearch(!research)
  };

  const calcTotal = () => {
    const localCart = localStorage.getItem("cart");

    if (!localCart) return;

    const cart = JSON.parse(localCart);
    const total = cart.map((item: any) => item.price * item.quantity);
    const totalValue = total.reduce((acc: any, curr: any) => acc + curr);
    setTotal(totalValue);
  };

  return (
    <ChackoutContainer>
      <div className="cardContainerCheckout">
        {cart.map((item: any) => {
          return (
            <div className="cardsLimit">
              <div className="cardBoard">
                <div className="imageContainer" key={item.id}>
                  <img src={item.image} alt="product image" />
                </div>
                <div className="cardInfos">
                  <h2>{item.name}</h2>
                  <p className="productPrice">{`R$ ${item.price}`}</p>
                  <div className="controlersContainer">
                    <button type="button" className="addLessButton" onClick={() => handleAdd(item.id)}>
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button type="button" className="addLessButton" onClick={() => handleRemove(item.id)}>
                      -
                    </button>
                    <button type="button" className="removeButton" onClick={() => handleDelete(item.id)}>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <FinishContainer>
          <h2>Total: R$ {total}</h2>
          <button type="button" className="finishButton" onClick={() => setFinish(!finish)}>
            Finalizar Compra
          </button>
          {finish && <DragAndDrop />}
        </FinishContainer>
      </div>
    </ChackoutContainer>
  );
};

export default CheckoutComponent;
