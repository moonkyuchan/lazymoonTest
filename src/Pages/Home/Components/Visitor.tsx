import React from "react";
import styled from "styled-components";
import CommentCard from "../../../Components/Common/CommentCard";

// interface PropsType {
//   maxlength: string;
// }

const Visitor: React.FC = () => {
  return (
    <VisitorBack>
      <VisitorTemplate>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </VisitorTemplate>
      <CommentInputBack
        placeholder="방명록을 남겨 주세요."
        maxLength={100}
      ></CommentInputBack>
      <UploadButton>IMG Upload</UploadButton>
      <SubmitButton>Submit</SubmitButton>
    </VisitorBack>
  );
};

const VisitorBack = styled.section`
  width: 600px;
  height: 700px;
  padding: 10px 30px;
`;

const VisitorTemplate = styled.article`
  display: grid;
  place-items: center;
  width: 540px;
  height: 680px;
  border: 1.5px solid #babdbe;
  background-color: #f5f5f5;
  border-radius: 5px;
  overflow: scroll;
`;

const CommentInputBack = styled.textarea`
  width: 510px;
  height: 85px;
  padding: 15px 30px;
  position: relative;
  left: 15px;
  bottom: 50px;
  border: 2px solid gray;
  border-radius: 15px;
  background-color: #fafafa;
  ::placeholder {
    color: #c7c7c7c7;
  }
  resize: none;
`;

const SubmitButton = styled.button`
  width: 60px;
  height: 30px;
  background-color: #f5f5f5;
  border: 2px solid gray;
  border-radius: 10px;
  position: relative;
  left: 360px;
  bottom: 71px;
  &:hover {
    background-color: grey;
    border-color: black;
    color: #fafafa;
  }
`;

const UploadButton = styled(SubmitButton)`
  width: 80px;
  margin-right: 10px;
  font-size: 9px;
`;

export default Visitor;
