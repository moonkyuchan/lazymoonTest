import React from "react";
import styled from "styled-components";
import { articleObj } from "../../API/Type/News_API_Type";

type articleProps = {
  data: articleObj;
};

const ArticleCard: React.FC<articleProps> = ({ data }) => {
  return (
    <ArticleCardBack onClick={() => window.open(data.url)}>
      <ArticleImg src={data.urlToImage} />
      <ArticleTitle>{data.title}</ArticleTitle>
    </ArticleCardBack>
  );
};

const ArticleCardBack = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 300px;
  border: 1px solid #eceff1;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #eceff1;
  }
`;

const ArticleImg = styled.img`
  width: 170px;
  height: 200px;
  /* border: 0px solid gray; */
  border-radius: 7px;
`;

const ArticleTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 10px;
  font-weight: bolder;
  padding-top: 15px;
  width: 150px;
  height: 70px;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; */
  letter-spacing: 0.6px;
`;
export default ArticleCard;
