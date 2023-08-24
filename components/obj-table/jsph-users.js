import { columns, fetcher } from '../../data-types/json-place-holder-users';
import ObjTable from './ObjTable';
import OnMountFetch from './onMountFetch';




function DataComponent({ data }) {
  return <ObjTable data={data} columns={columns} />;
}

export default function Users() {
  return <OnMountFetch fetcher={fetcher} DataComponent={DataComponent} />;
}