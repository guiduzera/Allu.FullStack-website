import Header from "@/components/Header";
import ProductsCatalog from "@/components/ProductsCatalog";
import ProductsFilter from "@/components/ProductsCatalog/ProductsFilter";
import SearchBar from "@/components/SearchBar";
import { ProductsCatalogContainer, ProductsContainer } from "@/styles/productsStyles";
import Head from "next/head";

export default function Products() {
  return (
    <ProductsContainer>
      <Head>
        <title>Allu | Products</title>
        <meta name="description" content="loja compleata de produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <SearchBar />
      <ProductsFilter />
      <ProductsCatalogContainer>
        <ProductsCatalog />
      </ProductsCatalogContainer>
    </ProductsContainer>
  );
}
