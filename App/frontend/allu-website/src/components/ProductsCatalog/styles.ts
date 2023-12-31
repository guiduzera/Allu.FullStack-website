import styled from "styled-components";

export const CatalogContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;

  > .catalogLimit {
    width: 100%;
    height: 8rem;
  }

  @media (min-width: 768px) {
    > .catalogLimit {
      height: 16rem;
    }
  }

  @media (min-width: 1024px) {
    > .catalogLimit {
      width: 60%;
      height: 40rem;
    }
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 10%;
  padding: 0.5rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.primary};

  > h2 {
    font-size: calc(1.5rem + 0.5vw);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }

  > .orderingContainer {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;

    > .ordringFilters {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    > .orderingTitle {
      padding: 0.3rem;
      font-size: calc(1.2rem + 0.2vw);
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }
  }

  > .orderingContainer > .ordringFilters > label {
    font-size: calc(1rem + 0.2vw);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }

  > .orderingContainer > .ordringFilters > input {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 376px) {
    > .orderingContainer {
      margin-bottom: 1rem;
    }
    > .orderingContainer > .ordringFilters > label {
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.primary};
    }

    > .orderingContainer > .ordringFilters > input {
      width: 1rem;
      height: 1rem;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

  @media (min-width: 1024px) {
    padding-left: 8rem;
    .orderingContainer {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    width: 50%;
    height: 50%;
    border: grey 1px solid;
    border-radius: 5rem;
    padding: 0 2rem;
  }

  > button {
    width: 10%;
    height: 50%;
    border: none;
    background-color: ${({ theme }) => theme.background};
  }

  @media (min-width: 768px) {
    > input {
      width: 60%;
    }
  }

  @media (min-width: 1024px) {
    > .searchBarButton {
      width: 5%;
    }

    > .clearButton {
      width: 2%;
    }

    > input {
      margin-top: 1.2rem;
      width: 50%;
      height: 80%;
    }
  }

  @media (min-width: 1440px) {
    > .searchBarButton {
      margin-top: 1.2rem;
    }

    > input {
      height: 70%;
    }
  }
`;
