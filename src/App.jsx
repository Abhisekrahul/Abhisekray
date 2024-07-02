import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Utils/Theams";
import NavBar from "./Componets/NavBar/NavBar";
import HeroSection from "./Componets/HeroSection/HeroSection";
import Skills from "./Componets/Skill/Skills";
import Education from "./Componets/Education/Education";
import { BrowserRouter as Router } from "react-router-dom";
import ExperinceSection from "./Componets/Experience/ExperinceSection";
import ProjectController from "./Componets/Project/ProjectController";
import { useState } from "react";
import Footer from "./Componets/Footer/Footer";
import ProjectdetailsController from "./Componets/ProjectDetails/ProjectdetailsController";
import Contactcontroller from "./Componets/Contact/Contactcontroller";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <NavBar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <ExperinceSection />
          </Wrapper>
          <ProjectController
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <Wrapper>
            <Education />
            <Contactcontroller />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectdetailsController
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
