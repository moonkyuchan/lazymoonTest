import React from "react";
import styled from "styled-components";
import Visitor from "./Components/Visitor";
import MyPhoto from "./Components/MyPhoto";

const Home = () => {
  return (
    <MainBack>
      <MainTemplate1>
        <Visitor></Visitor>
        <MyPhoto></MyPhoto>
      </MainTemplate1>
    </MainBack>
  );
};

const MainBack = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  min-width: 1280px;
`;

const MainTemplate1 = styled.section`
  display: flex;
  width: 50rem;
  height: 100%;
`;
export default Home;
