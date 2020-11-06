import React from "react"
import styled from 'styled-components';
import TopBar from "../components/TopBar";
import GlobalStyles from "../components/__globalStyles";
import Page from "../components/Page";
import {NAV} from "../utils/styling";

export default function Home() {
  return (
    <GlobalStyles>
      <TopBar/>
      <Page customStyle={`background: red;`}>
        <Content>
          <Left>
            <Title>Wypieki to nasza pasja</Title>
            <Subtitle>Najlepsze wypieki w Łodzi<br/>Zapoznaj się z naszą ofertą poiniżej</Subtitle>
          </Left>
          <Right>
            Obrazek
          </Right>
        </Content>
      </Page>
    </GlobalStyles>
  )
}

const Content = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 170px;
  height: calc(100vh - ${NAV.height});
  
`;

const Left = styled.div``;

const Right = styled.div``;

const Title = styled.h1`
  font-family: LilyScriptOne;
  font-size: 31px;
`

const Subtitle = styled.h3`
  color: var(--fontDarkSecondary);
  font-size: 16px;
`
