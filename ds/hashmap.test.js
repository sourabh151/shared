const hashMap = require("./hashmap");
//console.log(hashMap)
let h = new hashMap();

test("inserts key:sourabh with value 20", () => {
  expect(h.set("sourabh", 20)).toBe(20);
})
test("inserts key:sahil with value 30", () => {
  expect(h.set("sahil", 30)).toBe(30);
})
test("retrieves data for key sahil", () => {
  expect(h.get("sahil")).toBe(30);
})
test("checks if an entry with key sourabh exists", () => {
  expect(h.has("sourabh")).toBe(true);
})
test("checks if duplicate keys return null", () => {
  expect(h.set("sourabh",35)).toBe(null);
})
