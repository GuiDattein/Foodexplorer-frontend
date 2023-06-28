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

    > button:first-child {
        align-self: start;
    }

    > .descricao{
        text-align: center;
        margin-top: 16px;

        h2{
            margin: 16px 0 24px 0;
            font-size: 2.7rem;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
        p{
            margin-bottom: 24px;
            font-size: 1.62rem;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
    }

    > .tags {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
    }

    > .pedir{
        display: flex;
        gap: 16px;

        margin-top: 48px;
    }
`;