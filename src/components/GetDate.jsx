const GetDate = ({isoDate}) => {
  const date = new Date(isoDate);

  const day = date.getUTCDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getUTCFullYear();

  return <p>{`${day} ${month} ${year}`}</p>;
}

export default GetDate