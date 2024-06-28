import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Heading>
      <Title>Themes</Title>
      <Box>
        <UserName>Kushagra Singh</UserName>
        <Circle></Circle>
      </Box>
    </Heading>
  );
}

const Heading = styled.div`
  min-width: 100%;
  height: 10%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1160px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #212121;
  @media (max-width: 1160px) {
    font-size: 1.2rem;
  }
`;

const Box = styled.div`
  background-color: #f6f6f6;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 9px;
  @media (max-width: 1160px) {
    padding: 0.3rem;
    gap: 0.7rem;
  }
`;

const UserName = styled.div`
  font-size: 1.1rem;
  @media (max-width: 1160px) {
    font-size: 0.8rem;
  }
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #d9d9d9; // Change the color as needed
  @media (max-width: 1160px) {
    width: 1rem;
    height: 1rem;
  }
`;

export default Header;
