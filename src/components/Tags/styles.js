import styled from 'styled-components';

export const Container = styled.span`
    width: 61px;
    height: 32px;
    padding: 4px 8px;
    margin-right: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;