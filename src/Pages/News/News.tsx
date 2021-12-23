import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleCard from "../../Components/Common/ArticleCard";
import { NEWS_API_KEY } from "../../config";
import { GetHeadlineType } from "../../API/Model/News_Headline";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState<GetHeadlineType>();
  console.log(news);

  useEffect(() => {
    async function getNews() {
      await axios("https://newsapi.org/v2/top-headlines?country=kr", {
        headers: { Authorization: NEWS_API_KEY },
      }).then((res) => {
        setNews(res.data);
      });
    }
    getNews();
  }, []);

  return (
    <NewsBack>
      <Title>Today's News</Title>
      <SerachNews placeholder="Search" />
      <ArticleTemplate>
        <ArticleCard news={news} />
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
  margin-top: 50px;
  background-color: #eceff1;
  border-radius: 5px;
`;

export default News;
