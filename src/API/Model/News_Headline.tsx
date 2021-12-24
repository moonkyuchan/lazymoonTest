interface GetHeadlineType {
  status: string;
  totalResults: number;
  articles: articleObj[];
  // [key: string]: string | number | undefined;
}

type articleObj = {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type { GetHeadlineType, articleObj };
