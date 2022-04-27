import { createGlobalStyle } from 'styled-components';

export const fontUrl = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        text-shadow: none;
    }

    body {
        margin: 0px;
    }
`;