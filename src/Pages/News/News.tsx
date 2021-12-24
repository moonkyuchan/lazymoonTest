import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleCard from "../../Components/Common/ArticleCard";
import { NEWS_API_KEY } from "../../config";
import { GetHeadlineType } from "../../API/Model/News_Headline";
import axios from "axios";

const News = () => {
  const _ = require("lodash");
  const [news, setNews] = useState<GetHeadlineType>();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getNewsDefault();
  }, []);

  useEffect(() => {
    getNewsBySearch(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const getNewsDefault = async () => {
    await axios("https://newsapi.org/v2/top-headlines?country=kr", {
      headers: { Authorization: NEWS_API_KEY },
    }).then((res) => {
      setNews(res.data);
    });
  };

  const getNewsBySearch = async (query: string) => {
    if (query.length === 0) return;
    try {
      await axios(`https://newsapi.org/v2/everything?q=${searchValue}`, {
        headers: { Authorization: NEWS_API_KEY },
      }).then((res) => {
        setNews(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const wrappedOnChange = _.debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchInput(event.target.value);
    },
    1000
  );

  const handleSearchInput = (query: string) => {
    setSearchValue(query);
    if (query.trim() === "") {
      getNewsDefault();
    }
  };

  return (
    <NewsBack>
      <Title>Today's News</Title>
      <SerachNewsInput placeholder="Search" onChange={wrappedOnChange} />
      <ArticleTemplate>
        {/* {news &&
          news?.articles.map((data, idx) => {
            return <ArticleCard data={data} key={idx} />;
          })}
        {searchNews &&
          searchNews?.articles.map((data, idx) => {
            return <ArticleCard data={data} key={idx} />;
          })} */}
        {news?.articles.map((data, idx) => {
          return <ArticleCard data={data} key={idx} />;
        })}
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

const SerachNewsInput = styled.input`
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
  border-radius: 5px;
`;

export default News;
