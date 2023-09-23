import { FiShoppingBag } from 'react-icons/fi'
import { CartContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import CartContext from '@/context/cartContext'
import { useRouter } from 'next/router'

const Cart = () => {	
  const router = useRouter()
  const [research] = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    const localCart = localStorage.getItem('cart')

    if (!localCart) return;

    const cart = JSON.parse(localCart)

    if (cart.length > 0) {
      const quantity = cart.map((item: any) => item.quantity)
      const totalQuantity = quantity.reduce((acc: any, curr: any) => acc + curr)
      setQuantity(totalQuantity)
    }
  }, [research]) 

  return (
    <CartContainer>
      <span>{quantity}</span>
      <FiShoppingBag className="cartIconPopUp" onClick={() => router.push('/checkout')} />
    </CartContainer>
  )
}

export default Cart
