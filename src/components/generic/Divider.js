import React from "react";

import styled from "styled-components";
import theme from "constants/theme.js";

const Centerer = styled.div`
  display: ${props => (props.centered ? "table" : "block")};
  margin: 0 auto;

  margin-bottom: ${props => (props.centered ? "50px" : "0px")};
`;
const DividerWrapper = styled.div`
  display: inline-block;
`;

const StyledDivider = styled.div`
  background-color: ${theme.colors.lightblue};
  height: ${props => (props.big ? "4px" : "3px")};
  width: 100%;
  border-radius: 3px/50%;

  margin: 10px 0px;
`;

const Divider = props => {
  return (
    <Centerer centered={props.centered}>
      <DividerWrapper>
        {props.children}
        <StyledDivider big={props.big} />
      </DividerWrapper>
    </Centerer>
  );
};

export default Divider;
