import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import {BREAKPOINTS, NAV} from '../utils/styling';
import Fade from 'react-reveal/Fade';

const TopBar = () => {
  return (
    <Content>
      <Fade top>
        <Nav>
          <Options>
            <Option>Oferta</Option>
            <Option>O nas</Option>
            <LogoWrapper>
              <Logo/>
            </LogoWrapper>
            <Option>Kontakt</Option>
            <Option>Praca</Option>
          </Options>
        </Nav>
      </Fade>
      
    </Content>
  );
};

const Content = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAV.height};
  
`

const Nav = styled.nav`
  cursor: pointer;
`

const Options = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Option = styled.li`
  width: 197px;
  text-align: center;
  
  font-family: MontserratBold;
  font-size: 16px;
  
  @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
    width: 100px;
  }
`

const LogoWrapper = styled.div`
  width: 277px;
  position: relative;
  &:after {
    content: '',
    position: absolute;
    left:0;
    top: 0;
    height: 9px;
    width: 9px;
    background: red;
  }
`

export default TopBar;
