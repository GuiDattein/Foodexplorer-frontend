import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;

    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    background: ${({theme}) => theme.COLORS.DARK_200};

    position: relative;

    > .cards-mobile{
        width: 21rem;
        padding: 24px;

        > button{
            background: none;
            border: none;
        }

        > .favorite{
            position: absolute;
            top: 16px;
            right: 16px;
        }
        > .favorite:active{
            svg path{
                fill: #E1E1E6;
            }
        }

        > img{
            width: 88px;
            height: 88px;
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
    }

    > .cards-desktop{
        width: 30.4rem;
        padding: 24px;

        > button{
            background: none;
            border: none;
        }

        > .favorite{
            position: absolute;
            top: 24px;
            right: 24px;
        }

        > .favorite:active{
            svg path{
                fill: #E1E1E6;
            }
        }

        > img{
            width: 17.6rem;
            height: 17.6rem;

            margin-bottom: 15px;
        }

        > .details a{
            font-size: 2.4rem;
            font-weight: 700;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }

        > .details p{
            font-size: 1.4rem;
            font-weight: 400;
            font-style: normal;
            line-height: 160%;
            font-family: 'Roboto', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            margin: 15px 0;
        }

        > .details span{
            color: ${({theme}) => theme.COLORS.CAKE_200};
            font-size: 3.2rem;
            font-weight: 400;
        }

        > .include{
            display: flex;
            align-items: center;
            gap: 16px;

            margin-top: 15px;
        }
    }


    @media(min-width: 799px){
        > .cards-mobile{
            display: none;
        }
    }
    @media(max-width: 799px){
        > .cards-desktop{
            display: none;
        }
    }
`;