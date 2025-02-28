import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/sourabh151';

const MultipleReturnsFetchData = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return <>
    {(!data) && <h2>Loading...</h2>}
    {data && <div>
      <img src={data.avatar_url} alt={data.name} style={{
        width: 150, borderRadius: 25
      }} />
      <h2>{data.login}</h2>
      <h4>works at : {data.company}</h4>
      <p>{data.bio}</p>
    </div>}</>;
};
export default MultipleReturnsFetchData;
