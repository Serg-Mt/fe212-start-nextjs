export default function ObjTable({ data, columns }) {
  return <table>
    <thead>
      <tr>
        {columns.map(({ title }) => <th key={title}>{title}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map(obj => <tr key={obj.id}>
        {columns.map(({ title, getVal }) => <td key={title}>{getVal(obj)}</td>)}
      </tr>)}
    </tbody>
  </table>;
}