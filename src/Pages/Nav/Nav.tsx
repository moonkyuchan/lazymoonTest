import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import SignupModal from "../SignUp/SignupModal";

const Nav: React.FC = () => {
  const history = useHistory();
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSign, setOpenSign] = useState<boolean>(false);
  console.log(openLogin);
  console.log(openSign);

  function goHome() {
    history.push("/");
  }
  const goSignup = () => {
    setOpenSign(!openSign);
  };

  const goLogin = () => {
    setOpenLogin(!openLogin);
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
        <LoginTitle onClick={goLogin}>Login</LoginTitle>
        <SignupTitle onClick={goSignup}>Sign up</SignupTitle>
        {openSign && <SignupModal goSignup={goSignup} />}
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
  height: 150px;
  padding: 40px 50px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

const Title = styled.button`
  width: 35%;
  font-size: 20px;
  font-weight: 800;
  color: #9e9e9e;
  :hover {
    color: #333333;
  }
`;
const Profile = styled.button`
  width: 31%;
  font-size: 20px;
  font-weight: 800;
  color: #9e9e9e;
  :hover {
    color: #333333;
  }
`;
const Github = styled.button`
  width: 31%;
  font-size: 20px;
  font-weight: 800;
  color: #9e9e9e;
  :hover {
    color: #333333;
  }
`;

const NavCenter = styled.span`
  display: flex;
  justify-content: center;
  width: 60%;
  font-size: 50px;
  font-weight: 900;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  padding-right: 50px;
  .search,
  .menuBar {
    align-items: center;
    font-size: 25px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

const LoginTitle = styled.span`
  cursor: pointer;
  margin: 0 10px;
  font-size: larger;
`;
const SignupTitle = styled.span`
  cursor: pointer;
  margin: 0 10px;
  font-size: larger;
`;

export default Nav;
