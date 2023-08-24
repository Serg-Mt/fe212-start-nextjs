import Users from '../components/obj-table/jsph-users';
import RMcharacter from '../components/obj-table/rickandmortyapi-character';

export default function TablePage(){
  return <>
    <Users />
    <hr/>
    <RMcharacter />
  </>;
}