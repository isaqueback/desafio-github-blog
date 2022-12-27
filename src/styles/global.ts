import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme["gray-900"]};

    }

    body, input, button, textarea {
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`