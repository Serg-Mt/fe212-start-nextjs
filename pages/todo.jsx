import TodoList from '../components/todo/TodoList';
import { newItem } from '../components/todo/item-type';

export default function TodoPage({ startList }) {
  return <TodoList startList={startList} />;
}

export async function getStaticProps() {
  return { props: { startList: ['дело №1', 'дело №2'].map(str => newItem(str)) } };
}