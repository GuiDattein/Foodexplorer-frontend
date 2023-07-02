import styled from 'styled-components';

export const Container = styled.button`
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    
    border: none;
    background: none;

    > div{
        display: flex;
        align-items: center;
        gap: 11px;
    }
`;