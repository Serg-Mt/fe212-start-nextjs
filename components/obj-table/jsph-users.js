import columns from '../../data-types/json-place-holder-users';
import ObjTable from './ObjTable';
import OnMountFetch from './onMountFetch';


async function fetcher(){
  const
    response = await fetch('https://jsonplaceholder.typicode.com/users/');
  if (!response.ok) throw new Error('fetch ' + response.status);
  return await response.json();
} 

function DataComponent({data}){
  return <ObjTable data={data} columns={columns} />;
}

export default function Users(){
  return <OnMountFetch fetcher={fetcher} DataComponent={DataComponent} />;
}