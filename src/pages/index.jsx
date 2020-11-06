import React from "react"
import styled from 'styled-components';
import Page from "../components/Page";
import {BREAKPOINTS, NAV} from "../utils/styling";
import Layout from "../components/layout";
import Fade from "react-reveal";
import Button from "../components/Button";

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
                <ButtonWrapper>
                  <Button withArrowIcon>Zobacz</Button>
                </ButtonWrapper>
              </div>
            </Fade>
          </Left>
          <Right>
            <Fade right>
              <ImageWrapper>
                <Image src={`images/basket-2816374_1920.png`} />
                <Shadow/>
              </ImageWrapper>
            </Fade>
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
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  margin-right: 100px;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-right: 0;
  }
`;

const Right = styled.div`
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    margin-top: 30px;
  }
`;

const Title = styled.h1`
  font-family: LilyScriptOne;
  font-size: 50px;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    text-align: center;
  }
`

const Subtitle = styled.h3`
  color: var(--fontDarkSecondary);
  font-size: 16px;
  margin-top: 34px;
  line-height: 1.6em;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    text-align: center;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  z-index: 2;
`;

const Shadow = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50px;
  border-radius: 50%;
  
  background: transparent radial-gradient(closest-side at 50% 50%, #0000003C 0%, #0C0C0C27 74%, #7B7B7B00 100%) 0% 0% no-repeat padding-box;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  margin-top: 34px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  
  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    justify-content: center;
  }
`;
