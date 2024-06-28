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
          <ProfileTitle>Graphics &amp; UI/UX Designer</ProfileTitle>
          <ProfileAddress>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10px" }}
            />
            Denver, United States
          </ProfileAddress>
          <ProfileDescription>
            <DescriptionBox>
              I&apos;m a passionate graphic designer and UI/UX designer with a
              background in animation and motion design. I have a deep love for
              creating engaging and visually appealing experiences for users.
              I&apos;m currently available for freelance work or collaborations.
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
  background: url("/profile.jpeg") no-repeat center center;
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
