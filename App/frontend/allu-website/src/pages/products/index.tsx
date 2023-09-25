import Header from "@/components/Header";
import ProductsCatalog from "@/components/ProductsCatalog";
import { useContext, useEffect } from "react";
import { ProductsCatalogContainer, ProductsContainer } from "@/styles/productsStyles";
import Head from "next/head";
import CartContext from "@/context/cartContext";
import Cart from "@/components/Cart";

export default function Products() {
  const [research, setResearch] = useContext(CartContext);

  useEffect(() => {
    setResearch(!research);
    if (localStorage.getItem('cart')) return
    //iniciar o localstorage
    localStorage.setItem('cart', JSON.stringify([]))
  }, []);

  return (
    <ProductsContainer>
      <Head>
        <title>Allu | Products</title>
        <meta name="description" content="loja compleata de produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Cart />
      <Header />
      <ProductsCatalogContainer>
        <ProductsCatalog />
      </ProductsCatalogContainer>
    </ProductsContainer>
  );
}
