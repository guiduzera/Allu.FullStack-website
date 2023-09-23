import { FiShoppingBag } from 'react-icons/fi'
import { CartContainer } from './styles'
import { useEffect, useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([{ id: 0, quantity: 0, price: 0, name: '', image: '' }])
  const [appearCounter, setAppearCounter] = useState(false)
  const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    //puxar o conteúdo do LocalStorage
    const cart = localStorage.getItem('cart')

    if (!cart) return;

    const cartParsed = JSON.parse(cart)

    if (cartParsed.length > 0) {
      setAppearCounter(true)
      const quantity = cartParsed.map((item: any) => item.quantity)
      const totalQuantity = quantity.reduce((acc: any, curr: any) => acc + curr)
      setQuantity(totalQuantity)
      setCart(cartParsed)
    }
  }, [localStorage.getItem('cart')])

  return (
    <CartContainer>
      {appearCounter && <span>{quantity}</span>}
      <FiShoppingBag className="cartIconPopUp" />
    </CartContainer>
  )
}

export default Cart