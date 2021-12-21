import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root{ 
        --checkBg:linear-gradient(to right,hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        --brightBlue:hsl(220, 98%, 61%);
        --themeBg:${({ theme }) => theme.colors.themeBg};
        --textColor:${({ theme }) => theme.colors.textColor};
        --textColorSecondary:${({ theme }) => theme.colors.textColorSecondary};
        --bgColor: ${({ theme }) => theme.colors.bgColor};
    }
    *,*::after,*::before{
        box-sizing: border-box;
        padding: 0;
        margin:0;
        font-family: 'Josefin Sans', sans-serif;
    }
    body{
        font-family: 'Josefin Sans', sans-serif;
        background-image: ${({theme})=> theme.images.bgMobile};
        background-repeat:no-repeat;
        background-size: 100% 200px;
        background-color:var(--themeBg);
        @media (min-width:576px){
        background-image: ${({theme})=> theme.images.bgDesktop};
            background-size: 100% 300px;
            background-color:var(--themeBg); 
        }
    }
`

export default GlobalStyle;