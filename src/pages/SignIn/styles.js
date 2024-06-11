import styled from 'styled-components';

export const Container = styled.div`  
    width: 100%;
    height: 100vh;
    padding: 5rem 5.7rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media(max-width: 932px){
        > .logo{
            margin: 0 auto;
        }
    }

    @media(min-width: 933px){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
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

    @media(max-width: 899px){
        > h1 {
            display: none;
        }
    }

    @media(min-width: 900px){
        min-width: 60rem;
        height: auto;
        padding: 64px;

        border-radius: 16px;
        background: ${({theme}) => theme.COLORS.DARK_700};

        > h1, ButtonText {
            text-align: center;
        }
    }
`;