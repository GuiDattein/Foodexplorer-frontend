import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    height: 32px;
    border: 0;
    padding: 12px 24px;
    border-radius: 5px;

    font-weight: 500;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
    }
`;