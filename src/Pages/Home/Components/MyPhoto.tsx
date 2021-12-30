import React from "react";
import styled from "styled-components";

const MyPhoto = () => {
  return (
    <MyPhotoBack>
      <MyPhotoTemplate></MyPhotoTemplate>
    </MyPhotoBack>
  );
};

const MyPhotoBack = styled.section`
  width: 600px;
  height: 700px;
  padding: 10px 30px;
`;

const MyPhotoTemplate = styled.article`
  width: 540px;
  height: 680px;
  border: 1.5px solid #babdbe;
  background-color: #f5f5f5;
  border-radius: 5px;
`;
export default MyPhoto;
