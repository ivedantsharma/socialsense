"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUsers,
  faClipboardList,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function ProfileSidebar() {
  const [selectedTab, setSelectedTab] = useState("Users");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SidebarContainer>
      <Logo>
        <Image src="/hr.png" alt="Logo" width={50} height={50} />
      </Logo>
      <Container>
        <Menu>
          <Tab
            selected={selectedTab === "Chart"}
            onClick={() => handleTabClick("Chart")}
          >
            <FontAwesomeIcon icon={faChartLine} style={{ color: "#ffffff" }} />
          </Tab>
          <Tab
            selected={selectedTab === "Users"}
            onClick={() => handleTabClick("Users")}
          >
            <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />
          </Tab>
          <Tab
            selected={selectedTab === "Clipboard"}
            onClick={() => handleTabClick("Clipboard")}
          >
            <FontAwesomeIcon
              icon={faClipboardList}
              style={{ color: "#f0f2f4" }}
            />
          </Tab>
          <Tab
            selected={selectedTab === "Setting"}
            onClick={() => handleTabClick("Setting")}
          >
            <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
          </Tab>
        </Menu>
        <Setting>
          <Photo>
            <Image src="/image.png" alt="Profile" width={50} height={50} />
          </Photo>
          <Tab
            selected={selectedTab === "Exit"}
            onClick={() => handleTabClick("Exit")}
          >
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              style={{ color: "#ffffff" }}
            />
          </Tab>
        </Setting>
      </Container>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background: #25282a;
  width: 5%;
  height: 100vh;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-bottom: 1rem;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Setting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Tab = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ selected }) => (selected ? "#363A3C" : "transparent")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  &:hover {
    color: #fff;
    background-color: #25283a;
  }
  @media (max-width: 1140px) {
    padding: 0.5rem;
    width: 30px;
    height: 30px;
  }
`;

const Photo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  @media (max-width: 1160px) {
    width: 40px;
    height: 40px;
  }
`;

export default ProfileSidebar;
