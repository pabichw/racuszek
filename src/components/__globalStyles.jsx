import React from 'react';

import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #F8B52F;
    --bckgPrimary: #FFFFF8;
    --bckgSecondary: #211806;
    --fontDarkPrimary: #FFFFFF;
    --fontDarkSecondary: rgba(255, 255, 255, 0.51);
  }
  * {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle;
