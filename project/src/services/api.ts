import axios from 'axios';
import { API_CONFIG } from '../constants/api';

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'X-Api-Key': API_CONFIG.NEWS_API_KEY,
  },
});