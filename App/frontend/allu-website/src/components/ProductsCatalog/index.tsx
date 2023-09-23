import ProductCard from "../ProfileInfos/ProductCard";
import ProductsFilter from "./ProductsFilter";
import { CatalogContainer } from "./styles";

const ProductsCatalog = () => {
  return (
    <CatalogContainer>
      <div className="catalogLimit">
        <ProductCard showSpan spanPhrase="Assinar" profile={false} />
        <ProductCard showSpan spanPhrase="Assinar" profile={false} />
        <ProductCard showSpan spanPhrase="Assinar" profile={false} />
        <ProductCard showSpan spanPhrase="Assinar" profile={false} />
      </div>
    </CatalogContainer>
  )
};

export default ProductsCatalog;
