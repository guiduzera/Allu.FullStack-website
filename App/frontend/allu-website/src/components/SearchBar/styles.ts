import styled from "styled-components";

export const SearchBarContainer = styled.div`
    border: 1px solid green;
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
        padding: 0 1rem;
    }

    > button {
        width: 10%;
        height: 50%;
        border: none;
        background-color: ${({ theme }) => theme.background};
    }

    > button > img {
`;
