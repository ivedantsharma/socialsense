import React from "react";
import styled from "styled-components";

function Apply() {
  return (
    <Container>
      <Heading>Apply a skin to your Profile</Heading>
      <Box>
        <Button1>+ Custom</Button1>
        <Button2>Save</Button2>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f6f6f6;
  min-width: 90%;
  height: 10%;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 1160px) {
    min-width: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    padding: 1.3rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 746px) {
    font-size: 1.2rem;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 746px) {
    gap: 0.5rem;
  }
`;

const Button1 = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  &:hover {
    color: #fff;
    background-color: #022140;
  }
  @media (max-width: 746px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const Button2 = styled.button`
  font-size: 1.5rem;
  background-color: #000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  &:hover {
    color: #000;
    background-color: #fff;
  }
  @media (max-width: 746px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export default Apply;
