import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    position: sticky;
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.componentsBackground};
    color: ${({ theme }) => theme.background};

    > p {
        font-size: 0.8rem;
        font-weight: 400;
    }

    > p > a {
        font-size: 0.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.primary};
    }

    @media (min-width: 768px) {
        padding-top: 1rem;
        height: 3rem;

        > p {
            font-size: 1rem;
        }

        > p > a {
            font-size: 1rem;
        }
    }
`