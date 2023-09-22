import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  > .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    > h1 {
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }

    > img {
      width: 50%;
      max-width: 50%;
    }
  }

  > .productContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 10rem;

    > h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }
  }

  @media (min-width: 768px) {
    > .titleContainer {
      > h1 {
        font-size: 3rem;
      }
    }

    > .productContainer {
      height: 20rem;

      > h2 {
        font-size: 2rem;
      }

      > .productLimit {
        width: 80%;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0;
    gap: 0;
    > .titleContainer {
      padding-top: 1rem;
      align-items: flex-center;
      width: 50%;
      height: 100%;
      gap: 4rem;
      flex-direction: column;
      > h1 {
        font-size: 3rem;
      }

      > img {
        width: 50%;
        max-width: 80%;
      }
    }

    > .productContainer {
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      height: 32.5rem;
      width: 50%;
      gap: 1;
      padding-top: 1rem;

      > h2 {
        font-size: 2rem;
      }

      > .productLimit {
        padding: 1rem;
        width: 70%;
        height: 90%;
        overflow-y: scroll;
      }
    }
  }
`;

export const CardContainer = styled.div<{ $status: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  position: relative;
  margin-bottom: 1rem;

  > .imageContainer {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0.5rem;
    }
  }

  > .productInfosContainer {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;

    > h1 {
      font-size: calc(1rem + 0.5vw);
      white-space: nowrap;
      font-weight: 600;
      font-family: Segoe UI;
    }

    > p {
      color: red;
    }

    > span {
      display: flex;
      justify-content: center;
      color: ${({ theme }) => theme.background};
      background: ${({ theme, $status }) =>
        $status === "active" ? theme.primary : theme.error};
      font-size: 1rem;
      font-weight: 400;
      padding: 0.3rem;
      border-radius: 0.5rem;
      position: absolute;
      bottom: 10px;
      left: 10px;
      width: 3.4rem;
    }
  }

  @media (min-width: 768px) {
    > .productInfosContainer {
      justify-content: center;
      gap: 1rem;

      > h1 {
        font-size: calc(2rem + 0.5vw);
      }

      > p {
        font-size: calc(1rem + 0.5vw);
      }

      > span {
        font-size: 1.5rem;
        width: 5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 30%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    > .imageContainer {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0.5rem;
      }
    }

    > .productInfosContainer {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      gap: 0.5rem;

      > h1 {
        font-size: calc(1.2rem + 0.5vw);
      }

      > p {
        font-size: calc(0.5rem + 0.5vw);
      }

      > span {
        font-size: 1rem;
        width: 4rem;
      }
    }
  }
`;
