import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    height: 3.78rem;
    border: 0;
    padding: 10px 20px;
    border-radius: 3.3px;
    font-weight: 500;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:disabled {
        opacity: 0.5;
    }
`;