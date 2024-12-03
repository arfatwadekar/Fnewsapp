import axios from 'axios';
import { api } from './api';
import { Article, NewsAPIResponse } from '../types/news';
import { API_CONFIG } from '../constants/api';

export const fetchNews = async (searchQuery?: string): Promise<Article[]> => {
  try {
    const response = await api.get<NewsAPIResponse>('/top-headlines', {
      params: {
        country: API_CONFIG.DEFAULTS.COUNTRY,
        pageSize: API_CONFIG.DEFAULTS.PAGE_SIZE,
        q: searchQuery,
      },
    });

    if (response.data.status !== 'ok') {
      throw new Error('Failed to fetch news');
    }

    return response.data.articles.filter(article => 
      article.title && 
      article.description
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        throw new Error('API rate limit exceeded. Please try again later.');
      }
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      }
    }
    throw new Error('Failed to fetch news. Please try again later.');
  }
};