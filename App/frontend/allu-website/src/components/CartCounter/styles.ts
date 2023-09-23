import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 8px;
  right: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > .CounterNumberContainer {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.error};
    color: ${({ theme }) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  > div > .arrow-left {
    height: 30px;
    width: 30px;
  }

  > div > .arrow-right {
    height: 30px;
    width: 30px;
  }
`;