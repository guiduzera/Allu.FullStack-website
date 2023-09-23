import { SearchBarContainer } from "./styles";
import { TbShoppingBagSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Pequise um produto" />
      <button type="submit">
        <TbShoppingBagSearch style={{  
          fontSize: "2rem",
          cursor: "pointer",
        }} />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
