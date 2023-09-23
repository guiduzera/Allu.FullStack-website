import { useState } from "react";
import { Container } from "./styles";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const CartCounter = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  const handleCounter = ({ target }: any) => {
    if (target.id === "arrow-left") {
      if (counterNumber > 0) {
        setCounterNumber(counterNumber - 1);
      } else {
        setCounterNumber(0);
      }
    } else {
      setCounterNumber(counterNumber + 1);
    }
  };

  return (
    <Container>
      <div onClick={handleCounter}>
        <BsArrowLeftShort className="arrow-left" id="arrow-left" />
      </div>
      <div className="CounterNumberContainer">
        <span>{counterNumber}</span>
      </div>
      <div onClick={handleCounter}>
        <BsArrowRightShort className="arrow-right" />
      </div>
    </Container>
  );
};

export default CartCounter;
