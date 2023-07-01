import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 11.4rem;
    width: 100%;
    padding: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 800px){
        padding: 0 4rem;
        transition: 2s;
    }
    @media(min-width: 1024px){
        padding: 0 12.3rem;
        transition: 2s;
    }
`;

export const Menu = styled.div`
    @media(min-width: 800px){
        display: none;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > h1{
        font-family: var(--roboto);
        font-weight: 700;
        font-size: 2.11rem;
        white-space: nowrap;
    }
    > svg {
        width: 30px;
        height: 30px;
    }

`;

export const Search = styled.div`
    width: 100%;
    margin: 0 32px;

    @media(max-width: 799px){
        display: none;
    }
`;

export const Pedido = styled.div`
    > .desktop {
        display: flex;
        gap: 32px;
        span{
            margin-left: -4px;
        }

        .signout button{
            background: none;
            border: none;
        }

        .signout button img{
            width: 32px;
            height: 32px;
        }

        @media(max-width: 799px){
        display: none;
    }
    }

    > .mobile{
        position: relative;

        span{
            position: absolute;
            top: -4px;
            left: 17.54px;

            display: flex;
            justify-content: center;
            align-items: center;

            width: 20px;
            height: 20px;

            background-color: ${({theme}) => theme.COLORS.TOMATO_100};
            border-radius: 50%;

            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 14px;
        }

        @media(min-width: 800px){
        display: none;
    }
    }
`;