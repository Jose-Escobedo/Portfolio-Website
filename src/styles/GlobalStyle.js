import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --primary-color: #007bff;
    --background-dark-color: #10121A;
    --background-dark-grey: #191d2b;
    --secondary-color: #6c757d;
    --border-color: #2e344e;
    --background-light-color: #f1f1f1;
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191d2b;
}
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
}

body{

background: #141E30;
background: -webkit-linear-gradient(to right, #243B55, #141E30);  
background: linear-gradient(to right, #243B55, #141E30); 
color: var(--font-light-color);
}

a{
    font-family: inherit;
    color: inherit;
    font-size: 1rem;
}

h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
    }
}

span{
    color: var(--primary-color)
}
`;

export default GlobalStyle;
