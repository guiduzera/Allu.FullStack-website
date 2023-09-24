import styled from "styled-components";

export const LoginAndRegisterContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10rem;

  > .frontContainer {
    color: ${({ theme }) => theme.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > div {
      background-color: ${({ theme }) => theme.componentsBackground};
      width: 80%;
      height: 40%;
      border-radius: 50%;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const FormsContainer = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;

  > span {
    font-size: 1rem;
    font-weight: 600;
    color: black;

    > button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.primary};
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
  }

  > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    > input {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 1rem;
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.componentsBackground};
      color: ${({ theme }) => theme.primary};
      font-size: 1rem;
      font-weight: 600;

      &::placeholder {
        color: ${({ theme }) => theme.primary};
        padding-left: 0.5rem;
      }
    }

    > button {
      width: 100%;
      height: 2rem;
      border: none;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.background};
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;