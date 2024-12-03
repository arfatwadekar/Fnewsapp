export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  author: string;
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}