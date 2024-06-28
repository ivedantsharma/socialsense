"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Cell3() {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isOnboardingRequired, setIsOnboardingRequired] = useState(false);
  const handleToggleChange = () => {
    setIsOnboardingRequired(!isOnboardingRequired);
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <Main>
      <Container>
        <Heading>Onboarding</Heading>
        <ListBox>
          <ListName>Starts On</ListName>
          <InputWrapper>
            <StyledDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              showPopperArrow={false}
              open={showDatePicker}
              onClickOutside={() => setShowDatePicker(false)}
              customInput={<DateInput onClick={toggleDatePicker} />}
            />
            <CalendarIcon onClick={toggleDatePicker}>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </CalendarIcon>
          </InputWrapper>
        </ListBox>
      </Container>
      <Toggle>
        <ToggleSwitch
          onClick={() => setIsOnboardingRequired(!isOnboardingRequired)}
          isOn={isOnboardingRequired}
        >
          <ToggleButton isOn={isOnboardingRequired} />
        </ToggleSwitch>
        <ToggleLabel>Onboarding Required</ToggleLabel>
      </Toggle>
      <Container>
        <Heading>Current Status</Heading>
        <StatusBox>
          <StatusText>Onboarding</StatusText>
          <MeterBox>
            <MeterLabel>35%</MeterLabel>
            <ProgressBarContainer>
              <ProgressBar percentage={35} />
            </ProgressBarContainer>
          </MeterBox>
        </StatusBox>
      </Container>
      <Answer>View Answer</Answer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Container = styled.div`
  margin-bottom: 1.3rem;
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
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  position: relative; /* Added position relative */
`;

const ListName = styled.h5`
  font-size: 0.7rem;
  color: #7f7f7e;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  padding: 0.2rem;
  font-size: 0.8rem;
  width: 100%;
  background-color: transparent;
  z-index: 1; /* Ensure date picker appears above other elements */
`;

const DateInput = styled.input`
  padding: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.7rem;
  cursor: pointer;
`;

const CalendarIcon = styled.div`
  cursor: pointer;
  color: #007bff;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.3rem;
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

const StatusBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

const StatusText = styled.h5`
  font-size: 0.9rem;
  width: 30%;
  background-color: #f8f9fa;
  color: #7f7f7e;
  padding: 0.5rem;
  border-radius: 5px;
`;

const MeterBox = styled.div`
  display: flex;
  width: 70%;
  background-color: #f8f9fa;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  border-radius: 5px;
`;

const MeterLabel = styled.div`
  font-size: 0.9rem;
  color: #7f7f7e;
  margin-bottom: 0.1rem;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 8px;
  background-color: #007bff;
`;

const Answer = styled.div`
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

export default Cell3;
