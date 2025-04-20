import axios from "axios"
const url = 'https://www.course-api.com/react-tours-project';
async function getData(url) {
  const res = await axios.get(url);
  console.log(res);
}
getData(url)
