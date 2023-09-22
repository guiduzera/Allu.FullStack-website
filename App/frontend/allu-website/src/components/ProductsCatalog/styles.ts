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
`;