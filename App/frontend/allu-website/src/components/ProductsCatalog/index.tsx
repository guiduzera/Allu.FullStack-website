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

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/all`, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setClear(true);
  };

  const handleClear = () => {
    setClear(false);

    const getProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/all`, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
    setSearch("");
    setAlfaChecked(false);
    setPriceChecked(false);
  };

  const handleSearch = async (event: any) => {
    if (event.key !== "Enter") {
      return;
    }

    const filteredProducts = products.filter((product: any) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    setProducts(filteredProducts);
  };

  const handlerClick = () => {
    const filteredProducts = products.filter((product: any) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });

    setProducts(filteredProducts);
  }

  const handleAlfa = () => {
    setClear(true);
    setAlfaChecked(!alfaChecked);

    if (!alfaChecked) {
      const filteredProducts = products.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });

      setProducts(filteredProducts);
    } else {
      return;
    }
  };

  const handlePrice = () => {
    setClear(true);
    setPriceChecked(!priceChecked);

    if (!priceChecked) {
      //do mais caro ao mais barato
      const filteredProducts = products.sort((a: any, b: any) => {
        return b.price - a.price;
      });

      setProducts(filteredProducts);
    } else {
      return;
    }
  };

  return (
    <CatalogContainer>
      <SearchBarContainer>
        <input type="text" placeholder="Pequise um produto" value={search} onChange={handleChange} onKeyDown={handleSearch} />
        <button type="button" onClick={handlerClick}>
          <TbShoppingBagSearch
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />
        </button>
        {clear && <button type="button" onClick={handleClear}>
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
