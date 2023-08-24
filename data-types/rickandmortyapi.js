const columns = [
  { title: 'Name', getVal: obj => obj.name },
  { title: 'Image', getVal: ({ image, name }) => <img src={image} alt={name} /> },
  { title: 'Status', getVal: ({ status }) => status },
];

export default columns;