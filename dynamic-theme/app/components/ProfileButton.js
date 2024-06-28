"use client";
import React from "react";
import styled from "styled-components";

const ProfileButton = ({ children, onClick, color }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 1.2rem;
  width: 13rem;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "cancel" ? "#F2F3F3" : "#25282A"};
  color: ${(props) => (props.color === "cancel" ? "#000" : "#fff")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.color === "cancel" ? "#c82333" : "#0069d9"};
  }
`;

export default ProfileButton;
