"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

function Cell1() {
  const defaultImage = "/profile.jpeg";
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Heading>PROFILE IMAGE</Heading>
      <ImageBox>
        {selectedImage ? (
          <StyledImage
            src={selectedImage}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <StyledImage
            src={defaultImage}
            alt="Default Profile"
            layout="fill"
            objectFit="cover"
          />
        )}
      </ImageBox>
      <ChangeHeading
        onClick={() => document.getElementById("imageInput").click()}
      >
        <FontAwesomeIcon icon={faImage} /> Change Profile Image
      </ChangeHeading>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h4`
  font-size: 0.8rem;
  color: grey;
`;

const ImageBox = styled.div`
  position: relative;
  width: 275px;
  height: 250px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const ChangeHeading = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
  color: #007bff;
  font-weight: 700;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default Cell1;
