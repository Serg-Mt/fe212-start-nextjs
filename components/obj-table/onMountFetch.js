import { useState, useEffect } from 'react';

export default function OnMountFetch({ fetcher, DataComponent }) {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setData(await fetcher());
        setError(null);
      } catch (err) {
        setError(err);
      }
    }
    fetchUser();
  }, [fetcher]);

  
  if (error)
    return <div>Ошибка: {error.message}</div>;

  if (data)
    return <DataComponent data={data}/>;

  return <div className="spinner" />;

}