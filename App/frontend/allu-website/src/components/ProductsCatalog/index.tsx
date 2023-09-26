import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProfileInfos/ProductCard";
import { CatalogContainer, FilterContainer, SearchBarContainer } from "./styles";
import { API_URL } from "@/environments/urls";
import { TbShoppingBagSearch } from "react-icons/tb";
import { FcCancel } from "react-icons/fc";

const ProductsCatalog = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [clear, setClear] = useState(false);
  const [alfaChecked, setAlfaChecked] = useState(false);
  const [priceChecked, setPriceChecked] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/all`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setProducts(response.data.products);
      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    //verifica se tem algum filtro ativo e se tiver, usa setClear para mostrar o botão de limpar
    if (alfaChecked || priceChecked || search !== "") {
      setClear(true);
    } else {
      setClear(false);
    }
  }, [alfaChecked, priceChecked, search]);

  const productsOrderedByName = async (productName: string) => {
    // conforme o usuário digita, a lista de produtos é filtrada e conforme o usuário apaga, a lista de produtos é resetada
    if (productName === "") {
      getProducts();
      handleClear();
    } else {
      const dbProducts = await getProducts();
      const filteredProducts = dbProducts.filter((product: any) => {
        return product.name.toLowerCase().includes(productName.toLowerCase());
      });

      setProducts(filteredProducts);
    }
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    productsOrderedByName(e.target.value);
  };

  const handleClear = () => {
    getProducts();
    setSearch("");
    setAlfaChecked(false);
    setPriceChecked(false);
  };

  const handleAlfa = async () => {
    //ao ser os produtos são ordenados alfabeticamente e ao ser clicado novamente, volta a ordem original
    setAlfaChecked(!alfaChecked);
    setPriceChecked(false);
    let productsDefault;

    if (search !== "") {
      productsDefault = products
    } else {
      productsDefault = await getProducts();
    }

    if (!alfaChecked) {
      const filteredProducts = productsDefault.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });

      setProducts(filteredProducts);
    } else {
      if (search !== "") {
        productsOrderedByName(search);
      } else {
        setProducts(productsDefault);
      }
    }
  };

  const handlePrice = async () => {
    setPriceChecked(!priceChecked);
    setAlfaChecked(false);
    let productsDefault;

    if (search !== "") {
      productsDefault = products
    } else {
      productsDefault = await getProducts();
    }

    if (!priceChecked) {
      //do mais caro ao mais barato
      const filteredProducts = productsDefault.sort((a: any, b: any) => {
        return b.price - a.price;
      });

      setProducts(filteredProducts);
    } else {
      if (search !== "") {
        productsOrderedByName(search);
      } else {
        setProducts(productsDefault);
      }
    }
  };

  return (
    <CatalogContainer>
      <SearchBarContainer>
        <input type="text" placeholder="Pequise um produto" value={search} onChange={handleChange} />
        <button type="button" className="searchBarButton">
          <TbShoppingBagSearch
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </button>
        {clear && <button type="button" onClick={handleClear} className="searchBarButton clearButton">
          <FcCancel style={{
              fontSize: "2rem",
              cursor: "pointer",
            }} />
        </button>}
      </SearchBarContainer>
      <FilterContainer>
        <h2>Produtos disponíveis</h2>
        <div className="orderingContainer">
          <div className="orderingTitle">
            <p>Ordem:</p>
          </div>
          <div className="ordringFilters">
            <input type="checkbox" id="alfa" name="alfa" value="alfabética" onChange={handleAlfa} checked={alfaChecked} />
            <label htmlFor="alfa">Alfabética</label>
            <input type="checkbox" id="preco" name="preco" value="preco" onChange={handlePrice} checked={priceChecked} />
            <label htmlFor="preco">Preço</label>
          </div>
        </div>
      </FilterContainer>
      <div className="catalogLimit">
        {products.map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              showSpan
              spanPhrase="ass."
              profile={false}
              id={product.id}
              name={product.name}
              quantity={product.quantity}
              total={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </CatalogContainer>
  );
};

export default ProductsCatalog;
