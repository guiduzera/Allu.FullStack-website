import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  width: 100%;
  height: 90%;

  > .imageContainer {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .contentContainer {
    padding: 1rem;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    > h1 {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }

    > p {
      font-size: 1rem;
      font-weight: 400;
      color: black;
      text-align: justify;
      width: 90%;
    }

    #price {
      color: ${({ theme }) => theme.error};
    }

    > button {
      width: 50%;
      height: 2rem;
      border: none;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.background};
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    }

    > .turnBackButton {
      color: ${({ theme }) => theme.componentsBackground};
      cursor: pointer;
      margin-right: auto;
    }
  }

  @media (min-width: 768px) {
    > .contentContainer {
      > .turnBackButton {
        margin-right: 38rem;
      }
    }

    > .imageContainer {

      > img {
        object-fit: contain;
      }
    }
  }

  @media (min-width: 1024px) {
    > .contentContainer {
      > .turnBackButton {
        margin-right: 90rem;
      }

      > h1 {
        font-size: 2rem;
      }

      > p {
        font-size: 1.2rem;
        width: 80%;
      }
    }
  }
`;