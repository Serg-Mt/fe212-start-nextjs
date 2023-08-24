import ObjTable from '../components/obj-table/ObjTable';
import OnButtonFetch from '../components/obj-table/onButtonFetch';

import { fetcher as jsphFetcher, columns as jsphColumns } from '../data-types/json-place-holder-users';
import { fetcher as rmFetcher, columns as rmColumns } from '../data-types/rickandmortyapi';

function jsphDC({ data }) {
  return <ObjTable data={data} columns={jsphColumns} />;
}

function rmDC({ data }) {
  return <ObjTable data={data} columns={rmColumns} />;
}

export default function Table2() {
  return <>
    <OnButtonFetch fetcher={jsphFetcher} DataComponent={ jsphDC} />
    <hr />
    <OnButtonFetch fetcher={rmFetcher} DataComponent={rmDC } />
  </>;

}