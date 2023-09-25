import styled from "styled-components";

export const LogoutContainer = styled.div`
  background-color: ${({ theme }) => theme.componentsBackground};
  color: ${({ theme }) => theme.background};
  border: 1px solid black;
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 4rem;
  width: 4rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;
