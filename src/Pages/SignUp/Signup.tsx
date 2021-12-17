import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <SignupBack>
      <Test>하하</Test>
    </SignupBack>
  );
};

const SignupBack = styled.section`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Test = styled.article`
  width: 500px;
  height: 800px;
  border: 1px solid blue;
  margin: 60px;
`;

export default Signup;
