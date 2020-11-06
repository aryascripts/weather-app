import { useState, useEffect } from "react";
import axios, { CancelTokenSource, AxiosError } from "axios";

function useData(url: string) {
  const [query, setQuery] = useState<{ [key: string]: string }>({});
  const [data, setData] = useState<any>();

  // loading
  const [loading, setLoading] = useState<boolean>(false);

  // error state
  const [error, setError] = useState<string>("");

  // cancel token
  const [token, setToken] = useState<CancelTokenSource>();

  // query changed, make API call
  useEffect(() => {
    if (token) {
      token.cancel("REQUEST_CANCELLED");
    }
    async function fetchData() {
      if (!Object.keys(query).length) {
        return;
      }
      setError("");
      setLoading(true);
      setData([]);
      const token: CancelTokenSource = axios.CancelToken.source();
      setToken(token);

      const response = await axios.get(url, {
        cancelToken: token.token,
        params: query
      });

      setToken(undefined);
      setData(response.data);
      setLoading(false);
    }
    fetchData().catch((error: AxiosError) => {
      if (error.message !== "REQUEST_CANCELLED") {
        const msg: string = error.message;
        setError(msg);
      }
      setToken(undefined);
    });
  }, [query]);

  return [data, query, setQuery, loading, error] as const;
}

export default useData;