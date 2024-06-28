"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";
import ThemePreview from "./ThemePreview";

function ThemeContainer() {
  const [backgroundTheme, setBackgroundTheme] = useState("#FFFFFF");
  const [foregroundColor, setForegroundColor] = useState("#000000");

  const handleSolidSelect = (color) => {
    setBackgroundTheme(color);
  };

  const handleGradientSelect = (gradient) => {
    setBackgroundTheme(gradient);
  };

  const handleForegroundSelect = (color) => {
    setForegroundColor(color);
  };
  return (
    <Container>
      <ThemeSelector
        onSelectSolid={handleSolidSelect}
        onSelectGradient={handleGradientSelect}
        onSelectForeground={handleForegroundSelect}
      />
      <ThemePreview
        backgroundTheme={backgroundTheme}
        foregroundColor={foregroundColor}
      />
    </Container>
  );
}

const Container = styled.div`
  min-width: 90%;
  max-height: 80%;
  margin: 2rem;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  @media (max-width: 1160px) {
    margin: 1.8rem;
    gap: 3rem;
  }
  @media (max-width: 746px) {
    max-width: 90%;
    gap: 3rem;
    margin-top: 1.8rem;
    margin-bottom: 1.8rem;
    margin-left: 1.8rem;
    margin-right: 0;
  }
`;

export default ThemeContainer;
