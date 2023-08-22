import { useState, useEffect } from 'react';
import OneUser from '../components/OneUser';


export default function FetchUser({ id }) {
  const
    [user, setUser] = useState(null),
    [error, setError] = useState(null);

  // useEffect(
  //   () => {
  //     fetch('https://jsonplaceholder.typicode.com/users/' + id)
  //       .then(response => response.json())
  //       .then(u => setUser(u))
  //       .catch(err => setError(err));
  //   },
  //   []
  // );
  useEffect(() => {
    async function fetchUser() {
      try {
        const
          response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        if (!response.ok) throw new Error('fetch ' + response.status);
        setUser(await response.json());
        setError(null);
      } catch (err) {
        setError(err);
      }
    }
    fetchUser();
  }, [id]);

  if (error)
    return <div>Ошибка: {error.message}</div>;

  if (user)
    return <OneUser user={user} />;

  return <div className="spinner" />;
}