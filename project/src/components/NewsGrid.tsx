import React from 'react';
import { NewsCard } from './NewsCard';
import { Article } from '../types/news';

interface NewsGridProps {
  news: Article[];
}

export const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
      {news.map((article, index) => (
        <div
          key={`${article.title}-${index}`}
          className="opacity-0 animate-fade-slide-up"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <NewsCard article={article} />
        </div>
      ))}
    </div>
  );
};