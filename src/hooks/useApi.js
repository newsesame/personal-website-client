import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * 自定義 Hook 用於處理 API 調用
 * @param {string} url - API 端點 URL
 * @param {object} options - 額外的配置選項
 * @returns {object} { data, loading, error, refetch }
 */
export const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};
