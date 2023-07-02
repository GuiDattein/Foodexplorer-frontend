import styled from 'styled-components';

export const Container = styled.div`  
    width: 100%;
    padding: 5rem 5.7rem;

    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 33px;

    > .logo{
        margin: 0 auto;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;

    > label{
        font-size: 16px;
        font-weight: 400;
        line-height: 200%;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    

    @media(max-width: 799px){
        > h1 {
            display: none;
        }
    }
`;