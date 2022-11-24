const formatDate = (dateString) => {
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString([], options);
};

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 100}`;
};

export { formatDate, myLoader };
