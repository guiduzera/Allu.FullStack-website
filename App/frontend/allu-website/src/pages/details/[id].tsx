import Cart from "@/components/Cart";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import { DetailsContainer } from "@/styles/detailsStyles";
import Head from "next/head";

export default function Details() {
  return (
    <DetailsContainer>
      <Head>
        <title>Allu | Product Detail</title>
        <meta name="description" content="Detalhe de um produto em especifico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Cart />
      <Header />
      <ProductDetail />
    </DetailsContainer>
  );
}
