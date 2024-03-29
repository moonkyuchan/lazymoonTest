import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { CurrentUserAt } from "../../Store/action/CurrentUserAt";
import { auth, Providers } from "../../FBconfig";
import { FcGoogle } from "react-icons/fc";

interface PropsType {
  openCloseLogin: () => void;
}

interface StyleProps {
  emailValidation?: string;
  passwordValidation?: string;
}

const Login: React.FC<PropsType> = ({ openCloseLogin }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<string>("");

  const emailValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  const pwValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  const emailValidation = (input: string): string => {
    if (input.length === 0) {
      return "gray";
    } else if (input.length > 6 && input.includes("@") && input.includes(".")) {
      return "green";
    } else return "red";
  };

  const passwordValidation = (input: string): string => {
    if (input.length === 0) {
      return "gray";
    } else if (input?.length > 6) {
      return "green";
    } else return "red";
  };

  const LoginAccount = async () => {
    if (emailValidation(email) && passwordValidation(password)) {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then((res: any) => {
          dispatch(CurrentUserAt(res.user?.uid));
        });
    } else {
      setIsError("password does not match");
    }
  };

  const googleLogin = async () => {
    await auth
      .signInWithPopup(Providers.google)
      .then((res: any) => dispatch(CurrentUserAt(res.user?.uid)))
      .then(openCloseLogin)
      .catch((err) => console.log(err));
  };

  return (
    <LoginBack>
      <ModalContainer>
        <AiOutlineCloseCircle className="closebtn" onClick={openCloseLogin} />
        <Title>Login</Title>
        <InputTemplate>
          <InputBack>
            <InputTitle>Email</InputTitle>
            <EmailInput
              onChange={emailValue}
              placeholder="Email을 입력하세요."
              emailValidation={emailValidation(email)}
            />
          </InputBack>
          <InputBack>
            <InputTitle>Password</InputTitle>
            <PwInput
              onChange={pwValue}
              type="password"
              placeholder="비밀번호를 입력하세요."
              passwordValidation={passwordValidation(password)}
            />
          </InputBack>
        </InputTemplate>
        <ErrorMessage>{!!isError.length && isError}</ErrorMessage>
        <SubmitBack>
          <SubmitBtn onClick={LoginAccount}>Login</SubmitBtn>
          <GoogleSignup onClick={googleLogin}>
            <span>Google Login</span>
            <FcGoogle className="google" />
          </GoogleSignup>
        </SubmitBack>
      </ModalContainer>
    </LoginBack>
  );
};

const LoginBack = styled.div`
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
  height: 500px;
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
  min-height: 180px;
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

const EmailInput = styled.input<StyleProps>`
  width: 250px;
  height: 25px;
  padding: 0 20px;
  border: 1px solid #babdbe;
  border-radius: 5px;
  color: grey;
  font-size: 10px;
  border-color: ${(props) => props.emailValidation};
`;

const PwInput = styled(EmailInput)`
  border-color: ${(props) => props.passwordValidation};
`;

const ErrorMessage = styled.span`
  width: 250px;
  height: 30px;
  margin-top: 15px;
  color: red;
  text-align: center;
  font-size: 14px;
`;

const SubmitBack = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
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

const GoogleSignup = styled(SubmitBtn)`
  .google {
    position: relative;
    margin-left: 6px;
    top: 4px;
  }
`;

export default Login;
