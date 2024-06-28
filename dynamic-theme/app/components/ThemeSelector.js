import React from "react";
import styled from "styled-components";

function ThemeSelector({
  onSelectSolid,
  onSelectGradient,
  onSelectForeground,
}) {
  const solidColors = [
    "#000000",
    "#D9D9D9",
    "#FFFF99",
    "#B8E986",
    "#BFEFFF",
    "#FFB6C1",
    "#D8BFD8",
    "#F5DEB3",
    "#FFFFE0",
    "#F08080",
  ];
  const linearGradients = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #ffafbd, #ffc3a0)",
    "linear-gradient(to right, #2193b0, #6dd5ed)",
    "linear-gradient(to right, #cc2b5e, #753a88)",
    "linear-gradient(to right, #ee9ca7, #ffdde1)",
    "linear-gradient(to right, #42275a, #734b6d)",
    "linear-gradient(to right, #bdc3c7, #2c3e50)",
    "linear-gradient(to right, #de6161, #2657eb)",
    "linear-gradient(to right, #56ccf2, #2f80ed)",
    "linear-gradient(to right, #b24592, #f15f79)",
    "linear-gradient(to right, #f857a6, #ff5858)",
    "linear-gradient(to right, #1c92d2, #f2fcfe)",
  ];
  const radialGradients = [
    "radial-gradient(circle, #ff7e5f, #feb47b)",
    "radial-gradient(circle, #6a11cb, #2575fc)",
    "radial-gradient(circle, #00c6ff, #0072ff)",
    "radial-gradient(circle, #ffafbd, #ffc3a0)",
    "radial-gradient(circle, #2193b0, #6dd5ed)",
    "radial-gradient(circle, #cc2b5e, #753a88)",
    "radial-gradient(circle, #ee9ca7, #ffdde1)",
    "radial-gradient(circle, #42275a, #734b6d)",
    "radial-gradient(circle, #bdc3c7, #2c3e50)",
    "radial-gradient(circle, #de6161, #2657eb)",
    "radial-gradient(circle, #56ccf2, #2f80ed)",
    "radial-gradient(circle, #b24592, #f15f79)",
    "radial-gradient(circle, #f857a6, #ff5858)",
    "radial-gradient(circle, #1c92d2, #f2fcfe)",
  ];
  const foregroundColors = ["#000000", "#FFFFFF"];

  return (
    <Main>
      <Heading>Solids</Heading>
      <ColorBox>
        {solidColors.map((color, index) => (
          <ColorDiv
            key={index}
            onClick={() => onSelectSolid(color)}
            style={{
              backgroundColor: color,
            }}
          ></ColorDiv>
        ))}
      </ColorBox>
      <Heading>Linear Gradients</Heading>
      <ColorBox>
        {linearGradients.map((gradient, index) => (
          <ColorDiv
            key={index}
            onClick={() => onSelectGradient(gradient)}
            style={{
              background: gradient,
            }}
          ></ColorDiv>
        ))}
      </ColorBox>
      <Heading>Radial Gradients</Heading>
      <ColorBox>
        {radialGradients.map((gradient, index) => (
          <ColorDiv
            key={index}
            onClick={() => onSelectGradient(gradient)}
            style={{
              background: gradient,
            }}
          ></ColorDiv>
        ))}
      </ColorBox>
      <Heading>Foreground Colors</Heading>
      <ColorBox>
        {foregroundColors.map((color, index) => (
          <ColorDiv
            key={index}
            onClick={() => onSelectForeground(color)}
            style={{
              backgroundColor: color,
            }}
          ></ColorDiv>
        ))}
      </ColorBox>
    </Main>
  );
}

const Main = styled.div`
  min-width: 25%;
  height: 100%;
`;

const Heading = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.7rem;
  font-weight: 400;
`;

const ColorBox = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ColorDiv = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 5px;
  border: 1px solid black;
  @media (max-width: 1160px) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 3px;
  }
  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
    margin: 2px;
  }
`;

export default ThemeSelector;
