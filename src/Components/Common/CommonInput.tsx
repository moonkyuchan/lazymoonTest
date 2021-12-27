import React from "react";
import styled from "styled-components";
import { SignUpType } from "../../Data/Signup/SignupMock";

interface StyleProps {
  color: string;
  size: string;
}
interface InputProps {
  data: SignUpType;
  emailValue?: any;
  pwValue?: any;
  RepwValue?: any;
  resetError?: any;
}

const InputComponent: React.FC<InputProps> = ({
  data,
  emailValue,
  pwValue,
  RepwValue,
  resetError,
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

  return (
    <InputBack key={data?.id}>
      <InputTitle>{data?.title}</InputTitle>
      <InputTag
        placeholder={data?.placeholder}
        type={data?.type}
        onChange={(e) => {
          onChange(e, data);
        }}
        onFocus={resetError}
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
const InputTag = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 10px;
  padding: 0 20px;
  color: gray;
`;

export default InputComponent;
