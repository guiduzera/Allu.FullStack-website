/* eslint-disable import/prefer-default-export */
import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.componentsBackground};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4rem;
  boder-bottom: 1px solid grey;

  ul {
    display: flex;
    gap: 2rem;
    aling-items: center;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const LinkContainer = styled.li<{ $isActive: boolean }>`
  a {
    text-transform: uppercase;
    color: ${props => (props.$isActive ? props.theme.primary : props.theme.background)};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.$isActive
          ? props.theme.primary
          : lighten(0.2, props.theme.primary)};
    }
  }
`;
