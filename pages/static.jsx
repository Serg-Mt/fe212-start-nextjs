import ObjTable from '../components/obj-table/ObjTable';

import { fetcher as jsphFetcher, columns as jsphColumns } from '../data-types/json-place-holder-users';
import { fetcher as rmFetcher, columns as rmColumns } from '../data-types/rickandmortyapi';


export default function StaticPage({jsphData,rmData}){
  return <>
    <ObjTable data={jsphData} columns={jsphColumns} />
    <hr/>
    <ObjTable data={rmData} columns={rmColumns} />
  </>;
}

export async function getStaticProps() {
  const  
    // jsphData = await jsphFetcher(),
    // rmData = await rmFetcher();
    [jsphData,rmData] = await Promise.all([jsphFetcher(),rmFetcher()]);

  return {props:{jsphData,rmData}};
}