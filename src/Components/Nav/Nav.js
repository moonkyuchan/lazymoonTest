import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }

  return (
    <NavBack>
      <NavLeft>
        <Title>Lazymoon</Title>
        <Profile>Profile</Profile>
        <Github>Github</Github>
      </NavLeft>
      <NavCenter onClick={goHome}>LazyMoon</NavCenter>
      <NavRight>
        <BiSearchAlt2 className="search" />
        <AiOutlineMenu className="menuBar" />
      </NavRight>
    </NavBack>
  );
};

const NavBack = styled.nav`
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
  width: 35%;
  font-size: 20px;
  font-weight: 400;
  color: #9e9e9e;
  :hover {
    color: #333333;
    font-weight: 800;
  }
`;
const Profile = styled.button`
  width: 31%;
  font-size: 20px;
  font-weight: 400;
  color: #9e9e9e;
  :hover {
    color: #333333;
    font-weight: 800;
  }
`;
const Github = styled.button`
  width: 31%;
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
  align-items: center;
  width: 20%;
  padding-right: 25px;
  .search,
  .menuBar {
    align-items: center;
    font-size: 25px;
    margin: 0 10px;
  }
`;

export default Nav;
