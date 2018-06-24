import React, { Component } from "react";

import styled from "styled-components";
import theme from "constants/theme";
import { viewport } from "constants/viewport";

const StyledCard = styled.div`
  position: relative;
  width: 330px;
  height: calc(225px + 30px + 20px);

  margin-bottom: 50px;

  .header {
    position: absolute;
    background-color: ${theme.colors.buttonblue};
    text-align: center;

    width: 80%;
    padding: 10px 15px;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.15);

    left: 50%;
    transform: translateX(-50%);

    h4 {
      color: white;
    }
  }
  img {
    width: 300px;
    height: 225px;

    margin-top: 20px;

    border: 15px solid white;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Card = props => {
  return (
    <StyledCard>
      <div className="header">
        <h4>{props.title}</h4>
      </div>
      <img draggable="false" src={props.image} />
    </StyledCard>
  );
};

export default Card;
