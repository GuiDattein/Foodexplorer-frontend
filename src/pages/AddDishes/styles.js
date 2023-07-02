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
        padding: 1.6rem 3rem;
    }

    > main::-webkit-scrollbar{
        width: 8px;
        background: ${({theme}) => theme.COLORS.DARK_700};
    }
    > main::-webkit-scrollbar-thumb{
        background: ${({theme}) => theme.COLORS.DARK_900};
    }
`;

export const Content = styled.div`
    max-width: 1300px;

    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`

`;