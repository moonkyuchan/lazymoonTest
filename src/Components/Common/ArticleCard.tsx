import React from "react";
import styled from "styled-components";

const ArticleCard: React.FC = () => {
  return (
    <ArticleCardBack>
      <ArticldImg />
      <ArticleTitle>
        하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳하하하하하하하하하하하핳
      </ArticleTitle>
    </ArticleCardBack>
  );
};

const ArticleCardBack = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: red;
  padding: 15px;
`;

const ArticldImg = styled.img`
  width: 230px;
  height: 250px;
`;

const ArticleTitle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bolder;
  margin-top: 20px;
  width: 230px;
  height: 90px;
  border: 1px solid blue;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default ArticleCard;
