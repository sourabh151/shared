import axios from "axios"
const url = 'https://www.course-api.com/react-tours-project';
async function getData(url: string): Promise<any> {
  const res = await axios.get(url);
  console.log(res);
}
getData(url)
