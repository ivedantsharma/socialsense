import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const ThemePreview = ({ backgroundTheme, foregroundColor }) => {
  return (
    <PreviewContainer
      backgroundTheme={backgroundTheme}
      foregroundColor={foregroundColor}
    >
      <ProfileCard
        backgroundTheme={backgroundTheme}
        foregroundColor={foregroundColor}
      >
        <CoverPhoto />
        <ProfileImage />
        <ProfileDetails>
          <ProfileName>Mason Parker</ProfileName>
          <ProfileTitle>Graphics & UI/UX Designer</ProfileTitle>
          <ProfileAddress>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10px" }}
            />
            Denver, United States
          </ProfileAddress>
          <ProfileDescription>
            <DescriptionBox>
              I'm a passionate graphic designer and UI/UX designer with a
              background in animation and motion design. I have a deep love for
              creating engaging and visually appealing experiences for users.
              I'm currently available for freelance work or collaborations.
            </DescriptionBox>
            Biography
          </ProfileDescription>
        </ProfileDetails>
      </ProfileCard>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  min-width: 70%;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.foregroundColor};
  transition: background 0.3s, color 0.3s;
  border: 2px solid grey;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProfileCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.backgroundTheme};
  color: ${(props) => props.foregroundColor};
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  position: relative;
  border: 2px solid grey;
  @media (max-width: 768px) {
    padding: 0.7rem;
  }
`;

const CoverPhoto = styled.div`
  width: 100%;
  height: 10rem;
  background: url("https://i.pinimg.com/736x/4a/84/c0/4a84c0bf13a9dcea5465a0c128b50954.jpg")
    no-repeat center center;
  background-size: cover;
  margin-bottom: 1rem;
  border-radius: 15px;
  @media (max-width: 768px) {
    height: 6rem;
    margin-bottom: 0.7rem;
  }
`;

const ProfileImage = styled.div`
  width: 8.7rem;
  height: 8.7rem;
  background: url("data:image/jpeg;base64,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")
    no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  top: 5.5rem;
  left: 2.5rem;
  border: 3px solid #fff;
  @media (max-width: 768px) {
    width: 4.6rem;
    height: 4.6rem;
  }
`;

const ProfileDetails = styled.div`
  margin-top: 5rem;
  padding: 0 1.25rem;
  text-align: left;
`;

const ProfileName = styled.h3`
  font-size: 2rem;
  margin: 0.625rem 0;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProfileTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProfileAddress = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  color: #888;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProfileDescription = styled.div`
  padding: 5px;
  max-width: 30rem;
  margin-top: 10px;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0;
  }
`;

const DescriptionBox = styled.div`
  padding: 1.25rem;
  border-radius: 5px;
  /* color: #333; */
  border: 3px dashed grey;
  border-spacing: 100px;
  border-radius: 10px;
  margin-bottom: 0.625rem;
  @media (max-wdth: 746px) {
    padding: 0.5rem;
  }
`;

export default ThemePreview;
