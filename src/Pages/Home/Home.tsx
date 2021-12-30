import React from "react";
import styled from "styled-components";
import Visitor from "./Components/Visitor";
import MyPhoto from "./Components/MyPhoto";
import { auth } from "../../FBconfig";

const Home = () => {
  console.log(auth.currentUser, " Home 현재 유저");
  return (
    <MainBack>
      <MainTemplate1>
        <Visitor />
        <MyPhoto />
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
  width: 1200px;
  height: 100%;
`;
export default Home;
