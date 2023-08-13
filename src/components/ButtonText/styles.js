import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    border: none;
    background: none;
`;