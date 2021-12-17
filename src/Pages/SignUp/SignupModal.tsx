import React from "react";
import styled from "styled-components";

type OpenSignProps = {
  goSignup: any;
};

const SignupModal: React.FC<OpenSignProps> = ({ goSignup }) => {
  return (
    <Backgrounds>
      <ModalContainer onClick={goSignup}>하하하</ModalContainer>
    </Backgrounds>
  );
};

const Backgrounds = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 80%;
  padding: 16px;
  background: rgb(25, 31, 44);
  border-radius: 10px;
  text-align: center;
`;

export default SignupModal;
