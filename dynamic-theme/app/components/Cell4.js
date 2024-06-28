"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import ProfileButton from "./ProfileButton";

function Cell4() {
  const handleCopy = (id) => {
    const text = document.getElementById(id).value;
    navigator.clipboard.writeText(text);
  };

  return (
    <Container>
      <Heading>EMPLOYEE DETAILS</Heading>
      <ListBox>
        <ListName>FIRST NAME</ListName>
        <Input id="firstName" type="text" placeholder="Enter First Name" />
      </ListBox>
      <ListBox>
        <ListName>LAST NAME</ListName>
        <Input id="lastName" type="text" placeholder="Enter Last Name" />
      </ListBox>
      <ListBox>
        <ListName>EMAIL ADDRESS</ListName>
        <InputWrapper>
          <Input id="email" type="text" placeholder="Enter Email Address" />
          <CopyIcon onClick={() => handleCopy("email")}>
            <FontAwesomeIcon icon={faCopy} />
          </CopyIcon>
        </InputWrapper>
      </ListBox>
      <ListBox>
        <ListName>PHONE NUMBER</ListName>
        <InputWrapper>
          <Input id="phone" type="text" placeholder="Enter Phone Number" />
          <CopyIcon onClick={() => handleCopy("phone")}>
            <FontAwesomeIcon icon={faCopy} />
          </CopyIcon>
        </InputWrapper>
      </ListBox>
      <ListBox>
        <ListName>POSITION</ListName>
        <Input id="position" type="text" placeholder="Enter Position" />
      </ListBox>
      <ButtonContainer>
        <ProfileButton>Save Changes</ProfileButton>
        <ProfileButton color="cancel">Cancel</ProfileButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h4`
  font-size: 0.7rem;
  color: #7f7f7e;
  margin-bottom: 1rem;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  border-radius: 10px;
`;

const ListName = styled.h5`
  font-size: 0.7rem;
  color: #7f7f7e;
  padding: 0.5rem 0;
`;

const Input = styled.input`
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.7rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
`;

const CopyIcon = styled.div`
  cursor: pointer;
  color: #007bff;
  position: absolute;
  right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  @media (max-width: 880px) {
    display: none;
    overflow: hidden;
  }
`;

export default Cell4;
