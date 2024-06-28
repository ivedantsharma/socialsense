"use client";
import React from "react";
import styled from "styled-components";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileHeader from "../components/ProfileHeader";
import Cell1 from "../components/Cell1";
import Cell2 from "../components/Cell2";
import Cell3 from "../components/Cell3";
import Cell4 from "../components/Cell4";
import Cell6 from "../components/Cell6";
import ProfileButton from "../components/ProfileButton";

function Page() {
  return (
    <Main>
      <ProfileSidebar />
      <Container>
        <ProfileHeader />
        <Content>
          <Grid>
            {/* First row */}
            <GridItem>
              <Cell1 />
            </GridItem>
            <GridItem>
              <Cell2 />
            </GridItem>
            <GridItem>
              <Cell3 />
            </GridItem>
            {/* Second row */}
            <GridItem>
              <Cell4 />
            </GridItem>
            <GridItem>
              <div></div>
            </GridItem>
            <GridItem>
              <Cell6 />
            </GridItem>
            {/* Third row */}
            <ButtonContainer>
              <ProfileButton>Save Changes</ProfileButton>
              <ProfileButton color="cancel">Cancel</ProfileButton>
            </ButtonContainer>
          </Grid>
        </Content>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Container = styled.div`
  width: 75%;
  height: 100vh;
  padding-top: 1%;
  margin-left: 15%;
  margin-right: 15%;

  @media (max-width: 746px) {
    width: 90%;
    margin-left: 2%;
    margin-right: 2%;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
  flex-grow: 1;
  background-color: white;
  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  width: 100%; /* Ensures each item occupies full width of its cell */
`;

const ButtonContainer = styled.div`
  display: none; /* Initially hidden */
  @media (max-width: 880px) {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
`;

export default Page;
