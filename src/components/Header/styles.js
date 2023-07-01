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
`;

export const Menu = styled.div`

`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > h1{
        font-family: var(--roboto);
        font-weight: 700;
        font-size: 2.11rem;
    }

`;

export const Footer = styled.div`
    position: relative;

    > span{
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
`;