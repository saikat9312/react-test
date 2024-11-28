import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    try {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((result) => setData(result));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  return { loading, data, error };
};

export default useFetchData;
