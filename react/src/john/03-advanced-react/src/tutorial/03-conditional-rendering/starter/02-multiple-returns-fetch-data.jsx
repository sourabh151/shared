import { useEffect, useState } from 'react';
const url = 'https://sapi.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [data, setData] = useState(null);
  async function fetchData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      if(response.status == 404){
        data.ok = false;
      }
      else{
        data.ok = true;
      }
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return <>
    {console.log(data)}
    {(!data) && <h2>Loading...</h2>}
    {data && !data.ok && <div>
      <h2 style={{color:"red"}}>404</h2>
      <h3 style={{color:"orange"}}>User Not Found</h3>
    </div>}
    {data && data.ok && <div>
      <img src={data.avatar_url} alt={data.name} style={{
        width: 150, borderRadius: 25
      }} />
      <h2>{data.login}</h2>
      <h4>works at : {data.company}</h4>
      <p>{data.bio}</p>
    </div>}</>;
};
export default MultipleReturnsFetchData;
