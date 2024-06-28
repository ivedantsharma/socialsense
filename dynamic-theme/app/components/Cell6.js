import React, { useState } from "react";
import styled from "styled-components";

function Cell6() {
  const [toggleStates, setToggleStates] = useState({
    officeTour: true,
    managementIntroduction: false,
    workTools: true,
    meetYourColleagues: true,
    dutiesJournal: true,
    requestsHandling: true,
    activityTracking: true,
  });

  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Container>
      <Heading>ONBOARDING SCRIPTS</Heading>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("officeTour")}>
          <ToggleSwitch isOn={toggleStates.officeTour}>
            <ToggleButton isOn={toggleStates.officeTour} />
          </ToggleSwitch>
          <ToggleLabel>Office Tour</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.officeTour ? "100%" : "0%"}</Value>
      </StyledListBox>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("managementIntroduction")}>
          <ToggleSwitch isOn={toggleStates.managementIntroduction}>
            <ToggleButton isOn={toggleStates.managementIntroduction} />
          </ToggleSwitch>
          <ToggleLabel>Management Introduction</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.managementIntroduction ? "" : ""}</Value>
      </StyledListBox>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("workTools")}>
          <ToggleSwitch isOn={toggleStates.workTools}>
            <ToggleButton isOn={toggleStates.workTools} />
          </ToggleSwitch>
          <ToggleLabel>Work Tools</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.workTools ? "20%" : "0%"}</Value>
      </StyledListBox>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("meetYourColleagues")}>
          <ToggleSwitch isOn={toggleStates.meetYourColleagues}>
            <ToggleButton isOn={toggleStates.meetYourColleagues} />
          </ToggleSwitch>
          <ToggleLabel>Meet Your Colleagues</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.meetYourColleagues ? "0%" : "0%"}</Value>
      </StyledListBox>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("dutiesJournal")}>
          <ToggleSwitch isOn={toggleStates.dutiesJournal}>
            <ToggleButton isOn={toggleStates.dutiesJournal} />
          </ToggleSwitch>
          <ToggleLabel>Duties Journal</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.dutiesJournal ? "0%" : "0%"}</Value>
      </StyledListBox>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("requestsHandling")}>
          <ToggleSwitch isOn={toggleStates.requestsHandling}>
            <ToggleButton isOn={toggleStates.requestsHandling} />
          </ToggleSwitch>
          <ToggleLabel>Requests Handling</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.requestsHandling ? "0%" : "0%"}</Value>
      </StyledListBox>

      <StyledListBox>
        <Toggle onClick={() => handleToggle("activityTracking")}>
          <ToggleSwitch isOn={toggleStates.activityTracking}>
            <ToggleButton isOn={toggleStates.activityTracking} />
          </ToggleSwitch>
          <ToggleLabel>Activity Tracking</ToggleLabel>
        </Toggle>
        <Value>{toggleStates.activityTracking ? "0%" : "0%"}</Value>
      </StyledListBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h4`
  font-size: 0.8rem;
  color: #7f7f7e;
  margin-bottom: 1.2rem;
`;

const StyledListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  border-radius: 5px;
  width: 100%;
  height: 2.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ToggleSwitch = styled.div`
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.isOn ? "#007bff" : "#e9ecef")};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
`;

const ToggleButton = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: ${(props) => (props.isOn ? "21px" : "1px")};
  transition: left 0.4s ease, background-color 0.8s ease; /* Added transition */
`;

const ToggleLabel = styled.span`
  font-size: 0.9rem;
  color: #7f7f7e;
`;

const Value = styled.span`
  font-size: 0.9rem;
  color: #7f7f7e;
`;

export default Cell6;
