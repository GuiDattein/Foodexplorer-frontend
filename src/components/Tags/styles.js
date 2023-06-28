import styled from 'styled-components';

export const Container = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 32px;
    padding: 4px 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;