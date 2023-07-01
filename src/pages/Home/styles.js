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


    > .banner{
        position: relative;
        display: flex;

        max-width: 37.6rem;
        height: 12rem;
        margin-top: 44px;
        border-radius: 2.9px;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        img {
            position: absolute;
            bottom: 0;
            left: -30px;
        }

        .contentBanner{
            position: absolute;
            right: 20px;
            top: 30px;
            h2{
                max-width: 21.5rem;
                font-size: 1.8rem;
                font-weight: 600;
            }
            p{
                max-width: 20rem;
                font-size: 1.2rem;
                font-weight: 400;
            }
        }
    }

    > Section {
        .slides{
            overflow-x: auto;
        }
        > .slides::-webkit-scrollbar{
            display: none;
        }

        .cards{
            display: flex;
            gap: 16px;
        }
    }
`;