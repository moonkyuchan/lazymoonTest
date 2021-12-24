import React from "react";
import styled from "styled-components";
import { articleObj } from "../../API/Model/News_Headline";

type articleProps = {
  data: articleObj;
};

const ArticleCard: React.FC<articleProps> = ({ data }) => {
  return (
    <ArticleCardBack>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <ArticleImg src={data.urlToImage} />
        <ArticleTitle>{data.title}</ArticleTitle>
      </a>
    </ArticleCardBack>
  );
};

const ArticleCardBack = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  border: 2px solid #eceff1;
  border-radius: 5px;
  padding: 15px;
  background-color: white;
  box-shadow: 2px 2px #eceff1;
  cursor: pointer;
`;

const ArticleImg = styled.img`
  width: 250px;
  height: 260px;
  /* border: 0px solid gray; */
  border-radius: 7px;
`;

const ArticleTitle = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-size: 16px;
  font-weight: bolder;
  padding-top: 20px;
  width: 250px;
  height: 45px;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  /* display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; */
  letter-spacing: 0.6px;
`;
export default ArticleCard;
