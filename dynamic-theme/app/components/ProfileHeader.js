"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

function ProfileHeader() {
  return (
    <Container>
      <Menu>
        <FontAwesomeIcon icon={faArrowLeft} />
        <Photo>
          <ResponsiveImage src="/image.png" alt="Profile" fill />
        </Photo>
        <Title>Russel Sims</Title>
      </Menu>
      <Menu>
        <Date>Added on 21.04.2002</Date>
        <Button>
          <FontAwesomeIcon icon={faTrash} style={{ color: "#e73421" }} />
          Delete
        </Button>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: 1160px) {
    font-size: 1.2rem;
  }
`;

const Photo = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 1160px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 746px) {
    width: 30px;
    height: 30px;
  }
`;

const ResponsiveImage = styled(Image)`
  object-fit: cover;
`;

const Date = styled.h5`
  font-size: 0.7rem;
  color: grey;
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: #e73421;
  background-color: #fde6e2;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 10px;
  display: flex;
  gap: 0.5rem;
  &:hover {
    color: #fff;
    background-color: #022140;
  }
  @media (max-width: 746px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export default ProfileHeader;
