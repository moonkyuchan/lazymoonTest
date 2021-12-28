import React from "react";
import styled, { css } from "styled-components";
import { SignUpType } from "../../Data/Signup/SignupMock";

interface StyleProps {
  color: string;
  size: string;
}
interface ValidProps {
  validEmail: string;
  validPw: string;
  validRepw: string;
}
interface InputProps {
  data: SignUpType;
  emailValue?: any;
  // emailValue: (param: string) => void;
  pwValue?: any;
  RepwValue?: any;
  resetError?: any;
  email?: any;
  password?: any;
  repassword?: any;
}

const InputComponent: React.FC<InputProps> = ({
  data,
  emailValue,
  pwValue,
  RepwValue,
  resetError,
  email,
  password,
  repassword,
}) => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: SignUpType
  ) => {
    if (data.title === "Email") {
      emailValue(e.target.value);
    } else if (data.title === "Password") {
      pwValue(e.target.value);
    } else if (data.title === "RePassword") {
      RepwValue(e.target.value);
    }
  };

  const emailValidation = (input: string): string => {
    if (!input) return "gray";
    return input?.length > 6 && input?.includes("@") && input?.includes(".")
      ? "blue"
      : "red";
  };

  const passwordValidation = (input: string): string => {
    if (!input) return "gray";
    return input?.length > 6 ? "blue" : "red"; // regex 온라인에서 찾아서 걍 복붙하는게 깔끔
  };

  const repasswordValidation = (input: string): string => {
    if (!input) return "gray";
    return input?.length > 6 && input === password ? "blue" : "red"; // regex 온라인에서 찾아서 걍 복붙하는게 깔끔
  };

  return (
    <InputBack key={data?.id}>
      <InputTitle>{data?.title}</InputTitle>
      <InputTag
        placeholder={data?.placeholder}
        type={data?.type}
        title={data?.title}
        onChange={(e) => {
          onChange(e, data);
        }}
        onFocus={resetError}
        validEmail={emailValidation(email)}
        validPw={passwordValidation(password)}
        validRepw={repasswordValidation(repassword)}
      />
    </InputBack>
  );
};

const InputBack = styled.article`
  width: 450px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputTitle: any = styled.div<StyleProps>`
  width: 100px;
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin-right: 30px;
`;
const InputTag = styled.input<ValidProps>`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 0 20px;
  color: gray;
  ${(props) => {
    if (props.title === "Email") {
      return css`
        border-color: ${props.validEmail};
      `;
    } else if (props.title === "Password") {
      return css`
        border-color: ${props.validPw};
      `;
    } else if (props.title === "RePassword") {
      return css`
        border-color: ${props.validRepw};
      `;
    }
  }}
`;

export default InputComponent;
