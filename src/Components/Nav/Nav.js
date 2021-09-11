import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  let history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <NavBack>
      <NavLeft>
        <Title>Lazymoon</Title>
        <Profile>Profile</Profile>
        <Github>Github</Github>
      </NavLeft>
      <NavCenter onClick={goHome}>LazyMoon</NavCenter>
      <NavRight>
        <span>돋보기</span>
        <span>메뉴바</span>
      </NavRight>
    </NavBack>
  );
};

const NavBack = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 130px;
  padding: 20px 50px;
  position: fixed;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const Title = styled.button`
  width: 33.33%;
  font-size: 20px;
  font-weight: 400;
  color: #9e9e9e;
  :hover {
    color: #333333;
    font-weight: 800;
  }
`;
const Profile = styled.button`
  width: 33.33%;
  font-size: 20px;
  font-weight: 400;
  color: #9e9e9e;
  :hover {
    color: #333333;
    font-weight: 800;
  }
`;
const Github = styled.button`
  width: 33.33%;
  font-size: 20px;
  font-weight: 400;
  color: #9e9e9e;
  :hover {
    color: #333333;
    font-weight: 800;
  }
`;

const NavCenter = styled.span`
  display: flex;
  justify-content: center;
  width: 60%;
  font-size: 40px;
  font-weight: 900;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
`;

export default Nav;
