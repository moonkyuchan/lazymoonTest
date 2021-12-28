import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArticleCard from "../../Components/Common/ArticleCard";
import { NEWS_API_KEY } from "../../config";
import { GetHeadlineType } from "../../API/Type/News_API_Type";
import axios from "axios";

interface StyleProps {
  isLoading?: boolean;
}

const News: React.FC = () => {
  const _ = require("lodash");
  const [news, setNews] = useState<GetHeadlineType>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getNewsDefault();
  }, []);

  useEffect(() => {
    getNewsBySearch(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const getNewsDefault = async () => {
    setIsLoading(true);
    try {
      await axios("https://newsapi.org/v2/top-headlines?country=kr", {
        headers: { Authorization: NEWS_API_KEY },
      }).then((res) => {
        setNews(res.data);
      });
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const getNewsBySearch = async (query: string) => {
    if (query.length === 0) return;
    setIsLoading(true);
    try {
      await axios(`https://newsapi.org/v2/everything?q=${searchValue}`, {
        headers: { Authorization: NEWS_API_KEY },
      }).then((res) => {
        setNews(res.data);
      });
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const wrappedOnChange = _.debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchInput(event.target.value);
    },
    500
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
      <ArticleTemplate isLoading={isLoading}>
        {isLoading ? (
          <IsLoadingPage> Loading ....</IsLoadingPage>
        ) : (
          news?.articles.map((data, idx) => {
            return <ArticleCard data={data} key={idx} />;
          })
        )}
      </ArticleTemplate>
    </NewsBack>
  );
};

const NewsBack = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1280px;
  padding: 0 20px;
  height: 100%;
`;

const Title = styled.span`
  font-size: 2rem;
  margin-top: 40px;
  height: 50px;
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

const ArticleTemplate = styled.article<StyleProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  grid-gap: 30px 0;
  width: 1200px;
  height: 100%;
  margin-top: 50px;
  border-radius: 5px;
  ${(props) =>
    props.isLoading === true &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

const IsLoadingPage = styled.div`
  font-size: 25px;
`;

export default News;
