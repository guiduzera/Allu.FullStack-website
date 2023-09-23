import styled from "styled-components";

export const CartContainer = styled.div`
  color: ${({ theme }) => theme.background};
  position: absolute;
  z-index: 999;
  bottom: 10px;
  right: 20px;

  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.error};
  filter: alpha(opacity=50);
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;

  > .cartIconPopUp {
    width: 50%;
    height: 50%;
  }
`;