import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main { 
        grid-area: content;
        overflow-y: auto;
        padding: 1.6rem 3rem;
    }

    > main::-webkit-scrollbar{
        width: 8px;
        background: ${({theme}) => theme.COLORS.DARK_700};
    }
    > main::-webkit-scrollbar-thumb{
        background: ${({theme}) => theme.COLORS.DARK_900};
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > .banner-desktop {
        position: relative;

        display: flex;
        align-items: center;

        max-width: 112rem;
        height: 26rem;
        margin-top: 164px;
        border-radius: 2.9px;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        img {
            position: absolute;
            bottom: 0;
            left: -55px;
        }

        .contentBanner{
            position: absolute;
            right: 60px;
            top: 90px;
            h2{
                font-size: 4rem;
                font-weight: 500;
            }
            p{
                font-size: 1.6rem;
                font-weight: 400;
            }
        }

        @media(max-width: 799px){
            display: none;
        }
    }

    > .banner-mobile{
        position: relative;
        display: flex;

        max-width: 80rem;
        height: 12rem;
        margin-top: 44px;
        border-radius: 2.9px;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        img {
            position: absolute;
            bottom: 0;
            left: -30px;

            @media(min-width: 650px){
                position: absolute;
                bottom: 0;
                left: 10px;
            }
        }

        .contentBanner{
            position: absolute;
            right: 20px;
            top: 30px;
            h2{
                font-size: 1.8rem;
                font-weight: 600;
            }
            p{
                font-size: 1.2rem;
                font-weight: 400;
            }

            @media(max-width: 590px){
                max-width: 30rem;
            }
            @media(max-width: 528px){
                max-width: 20rem;
            }
        }
        @media(min-width: 800px){
                display: none;
        }
    }

    > Section {
        position: relative;
        .slides{
            overflow-x: auto;
        }
        > .slides::-webkit-scrollbar{
            display: none;
        }

        .arrow-left, .arrow-right{
            position: absolute;
            top: 58px;
            bottom: 0;

            font-size: 20px;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            
            width: 25px;
            text-align: center;
            
            cursor: pointer;
            border: none;
            background: linear-gradient(to left, rgba(0, 10, 15, 0.25) 0%, #000A0F 150%);
            z-index: 1;
        }

        .arrow-right{
            left: auto;
            right: 0;
            text-align: right;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            background: linear-gradient(to right, rgba(0, 10, 15, 0.27) 0%, #000A0F 150%);
        }

        .cards{
            display: flex;
            gap: 16px;
        }

        @media(min-width: 800px){
            .arrow-left, .arrow-right{
                font-size: 40px;
                width: 60px;
            }      
            
            .cards{
                    margin-left: 30px;
                }
        }
    }
`;