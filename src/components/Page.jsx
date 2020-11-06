import React from 'react';
import styled from 'styled-components';

const Page = ({children, customStyle}) => {
  return (
    <Wrapper customStyle={customStyle}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 50px; // top bar height;
  font-family: Montserrat;
  ${props => props.customStyle}
`;

export default Page;
