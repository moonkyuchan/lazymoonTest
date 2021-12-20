import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleCard from "../../Components/Common/ArticleCard";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState<object>({});
  console.log(news, "news");

  useEffect(() => {
    async function getNews() {
      await axios("").then((res) => {
        setNews(res);
      });
    }
    getNews();
  }, []);

  return (
    <NewsBack>
      <Title>Today's News</Title>
      <SerachNews placeholder="Search" />
      <ArticleTemplate>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </ArticleTemplate>
    </NewsBack>
  );
};

const NewsBack = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 100px;
  width: 100%;
  height: 100%;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-top: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SerachNews = styled.input`
  width: 350px;
  height: 40px;
  border: 2px solid #cfd8dc;
  border-radius: 5px;
  margin-top: 20px;
  padding: 0 20px;
  color: gray;
`;

const ArticleTemplate = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  grid-gap: 30px 0;
  width: 100%;
  height: 100%;
  background-color: yellow;
  margin-top: 50px;
`;

export default News;
