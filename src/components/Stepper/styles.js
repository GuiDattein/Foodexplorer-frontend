import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    font-size: 20px;
    font-family: Roboto;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    > button{
        background: none;
        border: none;
    }

    > span{
        margin: 0 14px;
    }
`;