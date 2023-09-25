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
      console.log('aquii', cart[0])
      const totalQuantity = quantity.reduce((acc: any, curr: any) => acc + curr)
      setQuantity(totalQuantity)
    }
  }, [research])

  return (
    <CartContainer onClick={() => router.push('/checkout')}>
      <div>
        <span className='quantity'>{quantity}</span>
        <FiShoppingBag className="cartIconPopUp" />
      </div>
      <span className="cartText">Ir para checkout!</span>
    </CartContainer>
  )
}

export default Cart
