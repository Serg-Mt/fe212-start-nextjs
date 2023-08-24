import columns from '../../data-types/rickandmortyapi';
import ObjTable from './ObjTable';
import OnMountFetch from './onMountFetch';


async function fetcher(){
  const
    response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
  if (!response.ok) throw new Error('fetch ' + response.status);
  return (await response.json()).results;
} 

function DataComponent({data}){
  return <ObjTable data={data} columns={columns} />;
}

export default function RMcharacter(){
  return <OnMountFetch fetcher={fetcher} DataComponent={DataComponent} />;
}