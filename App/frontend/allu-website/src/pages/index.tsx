import Header from '@/components/Header'
import { HomeContainer } from '@/styles/HomeStyles'
import Head from 'next/head'

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Profile</title>
        <meta name="description" content="informaçoes gerais do perfil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Header />
      </main>
    </HomeContainer>
  )
}
