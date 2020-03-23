import { createGlobalStyle } from "styled-components";
import normilize from "./normilize";

export const GlobalStyle = createGlobalStyle`
${normilize}

@font-face {
    font-family: Shabnam;
    src: url('fonts/Shabnam.eot');
    src: url('fonts/Shabnam.eot?#iefix') format('embedded-opentype'),
         url('fonts/Shabnam.woff2') format('woff2'),
         url('fonts/Shabnam.woff') format('woff'),
         url('fonts/Shabnam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: Shabnam;
    src: url('fonts/Shabnam-Bold.eot');
    src: url('fonts/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
         url('fonts/Shabnam-Bold.woff2') format('woff2'),
         url('fonts/Shabnam-Bold.woff') format('woff'),
         url('fonts/Shabnam-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: Shabnam;
    src: url('fonts/Shabnam-Black.eot');
    src: url('fonts/Shabnam-Black.eot?#iefix') format('embedded-opentype'),
         url('fonts/Shabnam-Black.woff2') format('woff2'),
         url('fonts/Shabnam-Black.woff') format('woff'),
         url('fonts/Shabnam-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}
@font-face {
    font-family: Shabnam;
    src: url('fonts/Shabnam-Medium.eot');
    src: url('fonts/Shabnam-Medium.eot?#iefix') format('embedded-opentype'),
         url('fonts/Shabnam-Medium.woff2') format('woff2'),
         url('fonts/Shabnam-Medium.woff') format('woff'),
         url('fonts/Shabnam-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: Shabnam;
    src: url('fonts/Shabnam-Light.eot');
    src: url('fonts/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
         url('fonts/Shabnam-Light.woff2') format('woff2'),
         url('fonts/Shabnam-Light.woff') format('woff'),
         url('fonts/Shabnam-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: Shabnam;
    src: url('fonts/Shabnam-Thin.eot');
    src: url('fonts/Shabnam-Thin.eot?#iefix') format('embedded-opentype'),
         url('fonts/Shabnam-Thin.woff2') format('woff2'),
         url('fonts/Shabnam-Thin.woff') format('woff'),
         url('fonts/Shabnam-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

*{
  font-family: "Shabnam","Roboto", "Helvetica", "Arial", sans-serif;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  @media screen and (max-width:600px){
  font-size: 15px;
  }
}

body {
  letter-spacing: 0px;
  > div{
  direction: rtl;
  text-align: right;
  }
}

a {
  text-decoration: none;
}

`;
