import Header from "@/components/Header";
import ProductsCatalog from "@/components/ProductsCatalog";
import ProductsFilter from "@/components/ProductsCatalog/ProductsFilter";
import SearchBar from "@/components/SearchBar";
import { ProductsCatalogContainer, ProductsContainer } from "@/styles/productsStyles";

export default function Products() {
  return (
    <ProductsContainer>
      <Header />
      <SearchBar />
      <ProductsFilter />
      <ProductsCatalogContainer>
        <ProductsCatalog />
      </ProductsCatalogContainer>
    </ProductsContainer>
  );
}
