import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {};
  phone: string;
  website: string;
  company: {};
};

const useFetchUsers = (url: string) => {
  const [data, setData] = useState<null | User[]>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data as User[]);
      setError(null);
    } catch (error: any) {
      setData(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  return { data, error, loading };
};

export default useFetchUsers;
