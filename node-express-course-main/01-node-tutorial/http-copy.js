const http = require("http");
const { writeFile } = require("fs");
const server = http.createServer((req, res) => {
  // console.log(res);
  //   console.log(req);
  //   writeFile("./content/req.json", JSON.stringify(req), (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log("success");
  //   });
  var simpleObject = {};
  for (var prop in res) {
    if (!res.hasOwnProperty(prop)) {
      continue;
    }
    if (typeof res[prop] == "object") {
      continue;
    }
    if (typeof res[prop] == "function") {
      continue;
    }
    simpleObject[prop] = res[prop];
  }
  writeFile("./content/res.json", JSON.stringify(simpleObject), (err) => {
    if (err) {
      console.log(err);
    }
    console.log("success");
  });

  res.end("hello world");
});
server.listen(5000);
