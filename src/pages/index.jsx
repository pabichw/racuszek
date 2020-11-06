import React from "react"
import styled from 'styled-components';
import Page from "../components/Page";
import {NAV} from "../utils/styling";
import Layout from "../components/layout";
import Fade from "react-reveal";

export default function Home() {
  return (
    <Layout>
      <Page customStyle={`background: var(--bckgPrimary);`}>
        <Content>
          <Left>
            <Fade left cascade>
              <div>
                <Title>Wypieki to nasza pasja</Title>
                <Subtitle>Najlepsze wypieki w Łodzi<br/>Zapoznaj się z naszą ofertą poiniżej</Subtitle>
              </div>
            </Fade>
          </Left>
          <Right>
            Obrazek
          </Right>
        </Content>
      </Page>
    </Layout>
  )
}

const Content = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${NAV.height});
  
`;

const Left = styled.div`
  margin-right: 350px;
`;

const Right = styled.div``;

const Title = styled.h1`
  font-family: LilyScriptOne;
  font-size: 50px;
`

const Subtitle = styled.h3`
  color: var(--fontDarkSecondary);
  font-size: 16px;
  margin-top: 34px;
  line-height: 1.6em;
`
