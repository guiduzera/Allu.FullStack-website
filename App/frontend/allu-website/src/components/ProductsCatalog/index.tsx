import ProductCard from "../ProfileInfos/ProductCard";
import ProductsFilter from "./ProductsFilter";
import { CatalogContainer } from "./styles";

const ProductsCatalog = () => {
  return (
    <CatalogContainer>
      <div className="catalogLimit">
        <ProductCard showSpan="yes" spanPhrase="Assinar" />
        <ProductCard showSpan="yes" spanPhrase="Assinar" />
        <ProductCard showSpan="yes" spanPhrase="Assinar" />
        <ProductCard showSpan="yes" spanPhrase="Assinar" />
      </div>
    </CatalogContainer>
  )
};

export default ProductsCatalog;
