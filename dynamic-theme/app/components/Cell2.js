"use client";
import React from "react";
import styled from "styled-components";

function Cell2() {
  return (
    <Main>
      <Container>
        <Heading>ROLE</Heading>
        <ListBox>
          <ListName>Role</ListName>
          <Dropdown>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="HR">HR</option>
            <option value="Receptionist">Receptionist</option>
          </Dropdown>
        </ListBox>
      </Container>
      <Container>
        <Heading>TEAM</Heading>
        <ListBox>
          <ListName>HR</ListName>
          <Dropdown>
            <option value="Kitte Middleton">Kitte Middleton</option>
            <option value="Sophia">Sophia</option>
            <option value="George Beck">George Beck</option>
            <option value="Jack Lender">Jack Lender</option>
            <option value="Amela Jones">Amela Jones</option>
          </Dropdown>
        </ListBox>
        <ListBox>
          <ListName>Manager</ListName>
          <Dropdown>
            <option value="Kirk Mitrohin">Kirk Mitrohin</option>
            <option value="Ross Taylor">Ross Taylor</option>
            <option value="Anjela Wu">Anjela Wu</option>
            <option value="Smith Jones">Smith Jones</option>
          </Dropdown>
        </ListBox>
        <ListBox>
          <ListName>Lead</ListName>
          <Dropdown>
            <option value="Eugene Humwell">Eugene Humwell</option>
            <option value="Kento Momota">Kento Momota</option>
            <option value="Lin Dan">Lin Dan</option>
            <option value="Lie Chong Wie">Lie Chong Wie</option>
            <option value="Soraus Jones">Soraus Jones</option>
          </Dropdown>
        </ListBox>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Heading = styled.h4`
  font-size: 0.8rem;
  color: #7f7f7e;
  margin-bottom: 1rem;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

const ListName = styled.h5`
  font-size: 0.7rem;
  color: #7f7f7e;
`;

const Dropdown = styled.select`
  padding: 0.2rem;
  background-color: transparent;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  option {
    background-color: #f8f9fa;
    border: none;
  }
`;

export default Cell2;
