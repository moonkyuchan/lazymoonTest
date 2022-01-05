import React from "react";
import styled from "styled-components";
import MoonInfo from "./Components/MoonInfo";
import WorkExperience from "./Components/WorkExperience";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Education from "./Components/Education";

const Profile: React.FC = () => {
  return (
    <ProfileBack>
      <ProfileTemplate>
        <MoonInfo />
        <WorkExperience />
        <Project />
        <Skills />
        <Education />
      </ProfileTemplate>
    </ProfileBack>
  );
};

const ProfileBack = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 100px;
  min-width: 1280px;
`;
const ProfileTemplate = styled.article`
  width: 900px;
  height: 100%;
`;
export default Profile;
