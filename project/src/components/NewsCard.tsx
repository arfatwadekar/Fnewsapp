import React from 'react';
import { Calendar, User, Link, ExternalLink } from 'lucide-react';
import { Article } from '../types/news';
import { formatDate } from '../utils/date';
import { handleImageError } from '../utils/image';

interface NewsCardProps {
  article: Article;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-56 overflow-hidden group">
        <img
          src={article.urlToImage || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop'}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {article.source.name}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {article.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-blue-500" />
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          {article.author && (
            <div className="flex items-center">
              <User size={16} className="mr-2 text-blue-500" />
              <span className="truncate max-w-[150px]">{article.author}</span>
            </div>
          )}
        </div>
        
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium"
        >
          Read full article
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};