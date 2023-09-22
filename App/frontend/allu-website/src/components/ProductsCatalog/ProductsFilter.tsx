import { FilterContainer } from "./styles";

const ProductsFilter = () => {
  return (
    <FilterContainer>
      <h2>Produtos disponíveis</h2>
      <div className="orderingContainer">
        <div className="orderingTitle">
          <p>Ordem:</p>
        </div>
        <div className="ordringFilters">
          <input type="checkbox" id="alfa" name="alfa" value="alfabética" />
          <label htmlFor="alfa">Alfabética</label>
          <input type="checkbox" id="preco" name="preco" value="preco" />
          <label htmlFor="preco">Preço</label>
        </div>
      </div>
    </FilterContainer>
  )
};

export default ProductsFilter;