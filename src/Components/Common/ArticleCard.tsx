import React from "react";
import styled from "styled-components";
import { GetHeadlineType } from "../../API/Model/News_Headline";

const ArticleCard = ({ news }: GetHeadlineType | undefined) => {
  return (
    <ArticleCardBack>
      <ArticldImg />
      <ArticleTitle>
        하하하하하하하하하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳
        하하ㅏ하하하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하ㅏ하하하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하ㅏ하하하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳하하하핳
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
  padding: 15px;
  cursor: pointer;
  background-color: white;
  box-shadow: 3px 3px gray;
`;

const ArticldImg = styled.img`
  width: 230px;
  height: 250px;
  border: 1px solid gray;
  background-color: yellow;
  border-radius: 7px;
`;

const ArticleTitle = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
  margin-top: 20px;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  letter-spacing: 0.6px;
`;
export default ArticleCard;
