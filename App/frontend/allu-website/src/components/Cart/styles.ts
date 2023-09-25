import styled from "styled-components";

export const CartContainer = styled.div`
  color: ${({ theme }) => theme.background};
  position: absolute;
  z-index: 999;
  bottom: 10px;
  right: 20px;
  cursor: pointer;

  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.error};
  filter: alpha(opacity=50);
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    gap: 0.5rem;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    > .quantity {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.background};
    }
  }

  > div > .cartIconPopUp {
    width: 50%;
    height: 50%;
  }

  > .cartText {
    display: none;
  }

  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    top: 350px;

    > div {
      display: flex;
      gap: 0.5rem;
      width: 80%;
      height: 80%;
      border-radius: 50%;
      align-items: center;
      justify-content: center;

      > .quantity {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({ theme }) => theme.background};
      }
    }

    > div > .cartIconPopUp {
      width: 60%;
      height: 60%;
    }
  }

  @media (min-width: 1024px) {
    width: 160px;
    height: 160px;
    top: 250px;
    flex-direction: column;
    
    > div {
      display: flex;
      gap: 0.5rem;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }

    > .cartText {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
    }

    &:hover {
      opacity: 1;
      filter: alpha(opacity=100);
      width: 180px;
      height: 180px;
      transition: 0.5s;
    }

    > div > .cartIconPopUp {
      width: 50%;
      height: 50%;
    }
  }
`;