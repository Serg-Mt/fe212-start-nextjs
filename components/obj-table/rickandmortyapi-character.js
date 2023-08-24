import {columns,fetcher} from '../../data-types/rickandmortyapi';
import ObjTable from './ObjTable';
import OnMountFetch from './onMountFetch';




function DataComponent({data}){
  return <ObjTable data={data} columns={columns} />;
}

export default function RMcharacter(){
  return <OnMountFetch fetcher={fetcher} DataComponent={DataComponent} />;
}