import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async function() {
      let result = await fetch(url)
      let jsonData = await result.json()
      setData(jsonData);
    }
    getData();
  }, [])
  return <div>
    <section>
      <h3>fetch data example</h3>
      <ul className="users">
        {
          data && data.map((person) => {
            return (
              <li key={person.id}>
                <img src={person.avatar_url} alt={person.login} />
                <div>
                  <h5 >{person.login}</h5>
                  <a href={person.html_url}>profile</a>
                </div>
              </li>)
          })
        }
      </ul>
    </section>
  </div>;
};
export default FetchData;
