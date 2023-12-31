export const columns = [
  { title: 'Name', getVal: obj => obj.name },
  { title: 'Image', getVal: ({ image, name }) => <img src={image} alt={name} /> },
  { title: 'Status', getVal: ({ status }) => status },
];

export async function fetcher(){
  const
    response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
  if (!response.ok) throw new Error('fetch ' + response.status);
  return (await response.json()).results;
} 

