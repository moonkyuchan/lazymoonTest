import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "../../Components/Common/CommonInput";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SignupData, SignUpType } from "../../Data/Signup/SignupMock";
import { auth } from "../../FBconfig";

type propsType = {
  openCloseSignup: any;
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
          {SignupData.map((data: SignUpType, idx) => {
            return (
              <InputComponent
                key={idx}
                data={data}
                emailValue={emailValue}
                pwValue={pwValue}
                RepwValue={RepwValue}
                resetError={resetError}
              />
            );
          })}
        </InputTemplate>
        <p style={{ color: "red" }}>{!!isError.length && isError}</p>
        <SubmitBtn onClick={newAccount}>Sign up</SubmitBtn>
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
  height: 55%;
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
  min-height: 40px;
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
  min-height: 55%;
  margin-top: 25px;
  border: 2px solid #babdbe;
  border-radius: 10px;
`;

const SubmitBtn = styled.button`
  font-size: 20px;
  font-weight: bolder;
  width: 250px;
  height: 35px;
  margin-top: 55px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const GoogleSignup = styled.button`
  font-size: 20px;
  font-weight: bolder;
  width: 250px;
  height: 35px;
  margin-top: 20px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default SignupModal;
