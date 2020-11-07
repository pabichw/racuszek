import React from 'react';
import styled from 'styled-components';
import GlobalStyle from "./__globalStyles";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <Wrap id='page-wrap'>
      <GlobalStyle />
        <TopBar/>
        {children}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
`
