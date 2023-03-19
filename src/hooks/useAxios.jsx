import { useCallback, useState } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = useCallback(async (config) => {
    setIsLoading(true);
    try {
      const response = await axios(config);
      setData(response.data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, data, error, fetchData };
};