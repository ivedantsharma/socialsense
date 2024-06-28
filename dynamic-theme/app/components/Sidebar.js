"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCalendar,
  faRectangleList,
  faUser,
  faEnvelope,
  faEnvelopeOpen,
  faGear,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("Themes");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SidebarContainer>
      <Logo>
        <Image
          src="/socialsense.jpeg"
          alt="Logo"
          width={250}
          height={50}
          layout="fixed"
        />
      </Logo>

      <Container>
        <Heading>Menu</Heading>
        <Tab
          selected={selectedTab === "Home"}
          onClick={() => handleTabClick("Home")}
        >
          <FontAwesomeIcon icon={faHouseUser} style={{ marginRight: "10px" }} />
          Home
        </Tab>
        <Tab
          selected={selectedTab === "Schedule"}
          onClick={() => handleTabClick("Schedule")}
        >
          <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "10px" }} />
          Schedule
        </Tab>
        <Tab
          selected={selectedTab === "Recommendation"}
          onClick={() => handleTabClick("Recommendation")}
        >
          <FontAwesomeIcon
            icon={faRectangleList}
            style={{ marginRight: "10px" }}
          />
          Recommendation
        </Tab>
        <Tab
          selected={selectedTab === "Analytics"}
          onClick={() => handleTabClick("Analytics")}
        >
          <FontAwesomeIcon icon={faChartLine} style={{ marginRight: "10px" }} />
          Analytics
        </Tab>
        <Tab
          selected={selectedTab === "Profile"}
          onClick={() => handleTabClick("Profile")}
        >
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
          Profile
        </Tab>
        <Tab
          selected={selectedTab === "Inbox"}
          onClick={() => handleTabClick("Inbox")}
        >
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "10px" }} />
          Inbox
        </Tab>
        <Tab
          selected={selectedTab === "Themes"}
          onClick={() => handleTabClick("Themes")}
        >
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            style={{ marginRight: "10px" }}
          />
          Themes
        </Tab>
      </Container>
      <br />
      <hr />
      <br />
      <Container>
        <Heading>Account</Heading>
        <Tab
          selected={selectedTab === "Settings"}
          onClick={() => handleTabClick("Settings")}
        >
          <FontAwesomeIcon icon={faGear} style={{ marginRight: "10px" }} />
          Settings
        </Tab>
      </Container>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background: rgb(244, 244, 246);
  width: 18%;
  height: 100vh;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  padding-left: 2rem;
`;

const Heading = styled.div`
  margin-bottom: 0.7rem;
  font-size: smaller;
  color: #8d8d8f;
`;

const Tab = styled.div`
  padding: 0.9rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ selected }) =>
    selected ? "rgb(228,227,232)" : "transparent"};
  &:hover {
    color: #fff;
    background-color: #022140;
  }
  @media (max-width: 1140px) {
    font-size: 0.9rem;
  }
  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

export default Sidebar;
