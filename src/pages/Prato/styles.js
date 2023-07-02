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
        overflow: auto;
        padding: 2rem 2rem;
    }
    > main::-webkit-scrollbar{
        width: 8px;
        height: 1px;
        background: ${({theme}) => theme.COLORS.DARK_700};
    }
    > main::-webkit-scrollbar-thumb{
        background: ${({theme}) => theme.COLORS.DARK_900};
    }
`;

export const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
    position: relative;

    > button:first-child {
        position: absolute;
        top: 5px;
        left: 5px;
    }

    > .prato{
        text-align: center;
        margin: 0 auto;
        
        img{
            height: 20rem;
            transition: 1s;

            margin-top: 5rem;

            @media(min-width: 400px){
                height: 26.4rem;
            }
        }
    }
        .descricao{
            text-align: center;
            margin-top: 16px;

            h2{
                margin: 16px 0 24px 0;
                font-size: 2.7rem;
                font-weight: 500;
                color: ${({theme}) => theme.COLORS.LIGHT_300};
            }
            p{
                margin-bottom: 24px;
                font-size: 1.62rem;
                color: ${({theme}) => theme.COLORS.LIGHT_300};
            }
        }

        .tags {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
        }

        .pedir{
            display: flex;
            gap: 16px;
            justify-content: end;

            margin-top: 48px;

            Button{
                max-width: 200px;
            }
        }

    @media(min-width: 900px){
        display: flex;
        align-items: center;

        max-width: 130rem;
        gap: 4.73rem;
        padding: 5rem 4rem;

        > button:first-child {
            left: 4rem;
        }

        > .prato{
            img{
                height: 35rem;
            }
        }

        > .sobre {
            .descricao{
                text-align: left;

                h2{
                    font-size: 4rem;
                }
                p{
                    font-size: 2.4rem;
                }
            }

            .tags{
                display: flex;
            }

            .pedir{
                justify-content: left;
            }
        }
    }
    @media(min-width: 1024px){
        > .prato{
            img{
                height: 38.9rem;
            }
        }
    }
`;