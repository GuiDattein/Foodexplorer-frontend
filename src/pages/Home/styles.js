import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main { 
        grid-area: content;
        overflow-y: auto;
        padding: 1.6rem 5rem;
    }
`;

export const Content = styled.div`
    width: 316px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

`;