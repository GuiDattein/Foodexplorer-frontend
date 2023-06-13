import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;

        --poppins: 'Poppins', sans-serif;
        --roboto: 'Roboto', sans-serif;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-size: 1.6rem;
        font-family: var(--poppins)
    }

    body, input, button, textarea{
        font-family: var(--poppins);
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;