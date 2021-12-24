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
  padding: 20px 100px;
  width: 100%;
  height: 100%;
`;

const MainTemplate1 = styled.section`
  display: flex;
  width: 100%;
`;
export default Home;
