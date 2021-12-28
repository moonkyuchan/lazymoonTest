import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { auth } from "../../FBconfig";

type propsType = {
  openCloseSignup: () => void;
};

const SignupModal: React.FC<propsType> = ({ openCloseSignup }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [isError, setIsError] = useState<string>("");

  const emailValue = (value: string): void => {
    setEmail(value);
  };

  const pwValue = (value: string): void => {
    setPassword(value);
  };

  const RepwValue = (value: string): void => {
    setRepassword(value);
  };

  const newAccount = async () => {
    if (password === repassword) {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
            setIsError(error.message.split(":")[1].split("(")[0]);
          }
        });
    } else {
      setIsError("password does not match");
    }
  };

  const resetError = () => {
    if (isError) setIsError("");
  };

  return (
    <SignUpBack>
      <ModalContainer>
        <AiOutlineCloseCircle className="closebtn" onClick={openCloseSignup} />
        <Title>Sign up</Title>
        <InputTemplate>
          <InputBack>
            <InputTitle>Email</InputTitle>
            <EmailInput />
          </InputBack>
          <InputBack>
            <InputTitle>Password</InputTitle>
            <EmailInput />
          </InputBack>
          <InputBack>
            <InputTitle>RePassword</InputTitle>
            <EmailInput />
          </InputBack>
        </InputTemplate>
        <p style={{ color: "red" }}>{!!isError.length && isError}</p>
        <SubmitBack>
          <SubmitBtn onClick={newAccount}>Sign Up</SubmitBtn>
          <GoogleSignup>Google Sign Up</GoogleSignup>
        </SubmitBack>
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
  width: 500px;
  height: 600px;
  padding: 45px;
  background: #fafafa;
  border-radius: 5px;
  border: 1px solid #cfd8dc;

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
  min-height: 40px;
  font-size: 40px;
  font-weight: 600;
  margin-top: 20px;
`;

const InputTemplate = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-height: 55%;
  margin-top: 25px;
  border: 1px solid #babdbe;
  border-radius: 5px;
`;

const InputBack = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  margin-top: 25px;
`;
const InputTitle = styled.span`
  width: 70px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 20px;
`;

const EmailInput = styled.input`
  width: 250px;
  height: 25px;
  padding: 0 20px;
  border: 1px solid #babdbe;
  border-radius: 5px;
  color: grey;
`;

const SubmitBack = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;
const SubmitBtn = styled.button`
  font-size: 17px;
  width: 250px;
  height: 35px;
  border: 1px solid #babdbe;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: black;
    color: white;
  }
  margin-top: 10px;
`;

const GoogleSignup = styled(SubmitBtn)``;

export default SignupModal;
