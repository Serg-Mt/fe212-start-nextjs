/* eslint-disable react/react-in-jsx-scope */
import FetchUser from '../components/FetchUser';
import { useState } from 'react';


export default function ListUser() {
  const
    [stateUsersIds, setUsers] = useState([...Array(3)].map((_, i) => 1 + i));
  return <div className="user-list" >
    {stateUsersIds.map(id => <FetchUser id={id} key={id} />)}
    <button onClick={() => setUsers(old => [...old, 1 + stateUsersIds.length])} >
      Next User </button>
  </div>;
}