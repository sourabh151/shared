const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

console.log("writing to myfile");
writeFileSync("./content/myfile.txt", "hello world", { flag: "a" });
console.log(readFileSync("./content/myfile.txt").toString("utf8"));
console.log("read from file");

//async
console.log("writing to myfile");
let pro = writeFile(
  "./content/myfile.txt",
  "hello world 2",
  { flag: "a" },
  () => console.log("wrote to myfile")
);
console.log(pro);
console.log(
  readFile("./content/myfile.txt", (err, data) => {
    if (err) {
      console.log("could not read file");
      return;
    }
    console.log(data.toString("utf8"));
  })
);
console.log("read from file");
