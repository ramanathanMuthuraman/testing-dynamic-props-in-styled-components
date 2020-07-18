import styled from "styled-components";
import React, { useState } from "react";

const colorsList = ["ff0000", "00ff00"];

const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompA = styled.div`
  background: ${(props) => `#${props.color}`};
  width: 60px;
  height: 60px;
  color: #fff;
`;

const ToggleButton = styled.button`
  margin-top: 20px;
  width: 100px;
`;

export default (props) => {
  const [color, setColor] = useState("ff0000");
  const updateColor = () => {
    setColor(color === colorsList[0] ? colorsList[1] : colorsList[0]);
  };
  return (
    <Wrapper>
      <CompA color={color} data-testid="CompA-A" />
      <ToggleButton data-testid="update-color" onClick={updateColor}>
        Toggle color
      </ToggleButton>
    </Wrapper>
  );
};
