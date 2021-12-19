import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import SignupModal from "../SignUp/SignupModal";
import LoginModal from "../Login/LoginModal";

const Nav: React.FC = () => {
  const history = useHistory();
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSign, setOpenSign] = useState<boolean>(false);

  function goHome() {
    history.push("/");
  }
  const goNews = () => {
    history.push("/news");
  };

  const openCloseSignup = () => {
    setOpenSign(!openSign);
  };

  const openCloseLogin = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <NavBack>
      <NavLeft>
        <Title onClick={goHome}>Home</Title>
        <Title>Profile</Title>
        <Title>Github</Title>
        <Title onClick={goNews}>News</Title>
      </NavLeft>
      <NavCenter>LazyMoon</NavCenter>
      <NavRight>
        <LoginTitle onClick={openCloseLogin}>Login</LoginTitle>
        {openLogin && <LoginModal openCloseLogin={openCloseLogin} />}
        <SignupTitle onClick={openCloseSignup}>Sign up</SignupTitle>
        {openSign && <SignupModal openCloseSignup={openCloseSignup} />}
        <BiSearchAlt2 className="search" />
        <AiOutlineMenu className="menuBar" />
      </NavRight>
      <Line />
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
  width: 25%;
`;

const Title = styled.button`
  width: 140px;
  font-size: 20px;
  font-weight: 800;
  color: #9e9e9e;
  :hover {
    color: #333333;
  }
`;
// const Profile = styled.button`
//   width: 31%;
//   font-size: 20px;
//   font-weight: 800;
//   color: #9e9e9e;
//   :hover {
//     color: #333333;
//   }
// `;
// const Github = styled.button`
//   width: 31%;
//   font-size: 20px;
//   font-weight: 800;
//   color: #9e9e9e;
//   :hover {
//     color: #333333;
//   }
// `;

const NavCenter = styled.span`
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 50px;
  font-weight: 900;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
  padding-right: 50px;
  .search,
  .menuBar {
    align-items: center;
    font-size: 25px;
    margin: 0 15px;
    cursor: pointer;
  }
`;

const LoginTitle = styled.span`
  cursor: pointer;
  margin: 0 15px;
  font-size: larger;
`;
const SignupTitle = styled.span`
  cursor: pointer;
  margin: 0 15px;
  font-size: larger;
`;

const Line = styled.div`
  position: absolute;
  top: 130px;
  width: 1700px;
  border-bottom: 2px solid #cfd8dc;
`;

export default Nav;
