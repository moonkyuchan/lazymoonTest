import React from "react";
import styled from "styled-components";

const CommentCard: React.FC = () => {
  return <CommentCardBack></CommentCardBack>;
};

const CommentCardBack = styled.article`
  display: flex;
  width: 490px;
  height: 120px;
  background-color: #fafafa;
  margin-top: 20px;
  border: 1px solid #babdbe;
  border-radius: 5px;
`;

export default CommentCard;
