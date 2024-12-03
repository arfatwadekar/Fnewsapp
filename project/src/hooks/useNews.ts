import { useState, useCallback, useEffect } from 'react';
import { Article } from '../types/news';
import { fetchNews } from '../services/newsApi';

export const useNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const loadNews = useCallback(async (search?: string) => {
    setLoading(true);
    setError(null);
    try {
      const articles = await fetchNews(search);
      setNews(articles);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadNews(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, loadNews]);

  const refreshNews = useCallback(() => {
    loadNews(searchTerm);
  }, [searchTerm, loadNews]);

  return {
    news,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    refreshNews
  };
};