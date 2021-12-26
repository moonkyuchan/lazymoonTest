import React from "react";
import styled from "styled-components";
import { SignUpType } from "../../Data/Signup/SignupMock";

interface StyleProps {
  color: string;
  size: string;
}
interface InputProps {
  data?: SignUpType;
}

const InputComponent = ({ data }: InputProps) => {
  return (
    <InputBack key={data?.id}>
      <InputTitle color size>
        {data?.title}
      </InputTitle>
      <InputTag placeholder={data?.placeholder} />
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
