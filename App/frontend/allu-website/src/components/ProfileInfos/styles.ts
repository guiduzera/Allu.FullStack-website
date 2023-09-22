import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
            font-family: Segoe UI;
            color: ${({ theme }) => theme.primary};
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
            object-fit: cover;
            border-radius: 0.5rem;
        }
    }

    > .productInfosContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
        padding: 1rem;
        gap: 0.5rem;

        > h1 {
            font-size: 1.5rem;
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
            background: ${({ theme, $status }) => $status === 'active' ? theme.primary : theme.error};
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
`;