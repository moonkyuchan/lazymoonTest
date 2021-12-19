import React from "react";
import styled from "styled-components";
import InputComponent from "../../Components/Common/CommonInput";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LoginData, LoginDataType } from "../../Data/Login/LoginMock";

type propsType = {
  openCloseLogin: any;
};

const LoginModal: React.FC<propsType> = ({ openCloseLogin }) => {
  return (
    <SignUpBack>
      <ModalContainer>
        <AiOutlineCloseCircle className="closebtn" onClick={openCloseLogin} />
        <Title>Login</Title>
        <InputTemplate>
          {LoginData.map((data: LoginDataType) => {
            return <InputComponent data={data} />;
          })}
        </InputTemplate>
        <SubmitBtn>Login</SubmitBtn>
        <GoogleSignup>Google</GoogleSignup>
      </ModalContainer>
    </SignUpBack>
  );
};

const SignUpBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 40rem;
  height: 80%;
  padding: 45px;
  background: #eceff1;
  border-radius: 10px;
  border: 1px solid cfd8dc;
  box-shadow: 5px 5px gray;

  .closebtn {
    font-size: 30px;
    cursor: pointer;
    position: fixed;
    right: 40px;
    top: 17px;
    color: gray;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-size: 40px;
  font-weight: 900;
  margin-top: 20px;
  color: #34515e;
`;

const InputTemplate = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 55%;
  margin-top: 25px;
  border: 2px solid #babdbe;
  border-radius: 10px;
`;

const SubmitBtn = styled.button`
  font-size: 20px;
  font-weight: bolder;
  width: 200px;
  height: 50px;
  margin-top: 55px;
  border: 2px solid gray;
  border-radius: 10px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const GoogleSignup = styled.button`
  font-size: 20px;
  font-weight: bolder;
  width: 200px;
  height: 50px;
  margin-top: 20px;
  border: 2px solid gray;
  border-radius: 10px;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

export default LoginModal;
