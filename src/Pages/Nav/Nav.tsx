import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Signup from "../SignUp/Signup";
import Login from "../Login/Login";
import { NavTitle, NavTitleType } from "../../Data/Nav/NavTitle";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { LogOutAt } from "../../Store/action/CurrentUserAt";

interface StyleProps extends NavTitleType {
  selectedTab: string | undefined;
}

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const userUid = useSelector((state: RootStateOrAny) => state.CurrentUserRd);
  const history = useHistory();
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSign, setOpenSign] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string | undefined>("HOME");

  // useEffect(() => {

  // }, [userUid])

  const handleNavTitle = (data: NavTitleType) => {
    if (data?.path) {
      history.push(data.path);
    }
    setSelectedTab(data.title);
    if (data.title === "Github") {
      window.open("https://github.com/moonkyuchan");
    }
  };

  const openCloseSignup = (): void => {
    setOpenSign(!openSign);
  };

  const openCloseLogin = () => {
    setOpenLogin(!openLogin);
  };

  const logOutUser = () => {
    dispatch(LogOutAt(userUid));
  };

  return (
    <NavBack>
      <NavLeft>
        {NavTitle.map((data: NavTitleType) => {
          return (
            <Title
              key={data.id}
              path={data.path}
              title={data.title}
              selectedTab={selectedTab}
              onClick={() => handleNavTitle(data)}
            >
              {data.title}
            </Title>
          );
        })}
      </NavLeft>
      <NavCenter>LazyMoon</NavCenter>
      <NavRight>
        {userUid ? (
          <LogoutTitle onClick={logOutUser}>Log out</LogoutTitle>
        ) : (
          <>
            <LoginTitle onClick={openCloseLogin}>Login</LoginTitle>
            {openLogin && <Login openCloseLogin={openCloseLogin} />}
            <SignupTitle onClick={openCloseSignup}>Sign up</SignupTitle>
            {openSign && <Signup openCloseSignup={openCloseSignup} />}
          </>
        )}
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
  min-width: 1280px;
  height: 150px;
  padding: 40px 50px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const Title = styled.button<StyleProps>`
  width: 140px;
  font-size: 15px;
  font-weight: 700;
  color: #9e9e9e;
  :hover {
    color: #333333;
  }
  ${(props) =>
    props.title === props.selectedTab &&
    css`
      color: #333333;
    `}
`;

const NavCenter = styled.span`
  display: flex;
  justify-content: center;
  width: 600px;
  font-size: 3.5rem;
  font-weight: 900;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  .search,
  .menuBar {
    align-items: center;
    font-size: 15px;
    margin: 0 15px;
    cursor: pointer;
  }
`;

const LoginTitle = styled.span`
  cursor: pointer;
  margin: 0 15px;
  font-size: 1rem;
`;
const SignupTitle = styled(LoginTitle)``;
const LogoutTitle = styled(LoginTitle)``;

const Line = styled.div`
  position: absolute;
  top: 130px;
  min-width: 1280px;
  border-bottom: 2px solid #cfd8dc;
`;

export default Nav;
