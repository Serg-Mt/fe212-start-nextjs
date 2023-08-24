import { useState } from 'react';

export default function OnButtonFetch({ fetcher, DataComponent }) {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null),
    fetchData = async () => {
      try {
        setData(await fetcher());
        setError(null);
      } catch (err) {
        setError(err);
      }
    };



  if (error)
    return <div>Ошибка: {error.message}</div>;

  if (data)
    return <DataComponent data={data} />;

  return <button onClick={fetchData}>load data</button>;
}