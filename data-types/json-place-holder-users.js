const columns = [
  { title: 'Name', getVal: obj => obj.name },
  { title: 'Email', getVal: ({ email }) => <a href={'mailto:' + email}>{email}</a> },
  { title: 'Address', getVal: ({ address: { street, suite, city } }) => `${city}, ${street} ${suite}` },
  { title: 'Website', getVal: ({ website }) => <a href={'https://' + website}>{website}</a> },
  { title: 'Phone number', getVal: ({ phone }) => <a href={'tet:'+phone}>{phone}</a> },
];

export default columns;