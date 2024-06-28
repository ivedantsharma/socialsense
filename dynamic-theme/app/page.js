"use client";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Apply from "./components/Apply";
import ThemeContainer from "./components/ThemeContainer";
export default function Home() {
  return (
    <Main>
      <Sidebar />
      <Container>
        <Header />
        <Apply />
        <ThemeContainer />
      </Container>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  width: 82%;
  height: 100vh;
  @media (max-width: 746px) {
    width: 90%;
  }
`;
