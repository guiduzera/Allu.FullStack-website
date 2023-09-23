import { createContext } from "react";

type CartContextType = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
]

const CartContext = createContext<CartContextType>([false, () => {}]);

export default CartContext;
