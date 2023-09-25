import Cart from '@/components/Cart'
import Header from '@/components/Header'
import ProfileInfos from '@/components/ProfileInfos'
import Logout from '@/components/logout'
import CartContext from '@/context/cartContext'
import { HomeContainer } from '@/styles/HomeStyles'
import Head from 'next/head'
import { useContext, useEffect } from 'react'

export default function Home() {
  const [research, setResearch] = useContext(CartContext);

  useEffect(() => {
    setResearch(!research);
    if (localStorage.getItem('cart')) return
    //iniciar o localstorage
    localStorage.setItem('cart', JSON.stringify([]))
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Allu | Profile</title>
        <meta name="description" content="informaçoes gerais do perfil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Cart />
      <Header />
      <ProfileInfos />
      <Logout />
    </HomeContainer>
  )
}
