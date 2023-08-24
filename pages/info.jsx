import { useState } from 'react';
import FetchUser from '../components/FetchUser';

export default function InfoPage() {
  const [userId, setUserid] = useState(1);
  return <>
    <input
      type="number"
      value={userId}
      onInput={evt => setUserid(evt.target.value)}
    />

    <FetchUser id={userId} />
  </>;
}