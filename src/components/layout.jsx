import React from 'react';
import GlobalStyle from "./__globalStyles";
import TopBar from "./TopBar";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
        <TopBar/>
        {children}
    </>
  )
}
