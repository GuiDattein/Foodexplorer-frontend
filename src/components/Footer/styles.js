import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 77px;
    padding: 0 2.7rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > p{
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_200};
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: .64rem;

    color: ${({theme}) => theme.COLORS.LIGHT_700};
    font-size: 1.52rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
`;