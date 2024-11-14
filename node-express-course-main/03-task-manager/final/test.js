// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  const kittySchema = new mongoose.Schema({ name: String });
  kittySchema.methods.speak = function speak() {
    const greeting = this.name ? `meow name is ${this.name}` : "i have no name";
    console.log(greeting);
  };
  const Kitten = mongoose.model("Kitten", kittySchema);
  const penguin = new Kitten({ name: "penguin" });
  await penguin.speak();
  console.log("successs");
  await penguin.save();
  const kittens = await Kitten.find();
  console.log(kittens);
}
