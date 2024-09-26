// const getData = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("success");
//     }, 2000);
//   });
// };
// async function asyncCall() {
//   console.log("start in async");
//   const data = await getData();
//   console.log(data);
//   console.log("end in async");
// }
// console.log("start");
// asyncCall();
// console.log("end");

// const user = await fetch('/users.json').json()[0]
//await fetch(`/users/${user.name}).json()
function getData() {
  console.log(typeof(data));
  if (true) {
    var data = "some data";
    console.log(typeof(data));
  }
  console.log(data + 3);
}
// console.log(data + 4);
getData();
// console.log(data + 5);
