import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    padding: 24px;
    text-align: center;

    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    background: ${({theme}) => theme.COLORS.DARK_200};

    position: relative;

    > .favorite{
        position: absolute;
        top: 16px;
        right: 16px;
    }

    > img{
        width: 8.8rem;
        height: 8.8rem;
        margin-bottom: 12px;
    }

    > .details a{
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > .details p{
        margin: 12px 0;
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-size: 1.6rem;
    }

    > .include{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`;