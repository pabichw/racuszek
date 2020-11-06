import React from 'react';
import styled from 'styled-components';

const GlobalStyles = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
};

const Wrap = styled.div`
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

export default GlobalStyles;
