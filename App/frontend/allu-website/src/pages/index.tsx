import Cart from '@/components/Cart'
import Header from '@/components/Header'
import ProfileInfos from '@/components/ProfileInfos'
import { HomeContainer } from '@/styles/HomeStyles'
import Head from 'next/head'

export default function Home() {
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
    </HomeContainer>
  )
}
