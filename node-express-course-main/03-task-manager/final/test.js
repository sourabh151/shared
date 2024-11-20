// getting-started.js
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    //await mongoose.connect("mongodb://127.0.0.1:27017/test");
    await mongoose.connect(
        "mongodb+srv://sourabh:nodeExpressCourse@nodeexpresscourse.jikfk.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressCourse",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    await mongoose.connection.useDb("test");

    const kittySchema = new mongoose.Schema({ name: String });
    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? `meow name is ${this.name}`
            : "i have no name";
        console.log(greeting);
    };
    const Kitten = mongoose.model("Kitten", kittySchema);
    await Kitten.update({_id:"6735b8601195af0f799bd196"},{name:"mosi G"},{upsert:true})
    //await cat.save();
    const kittens = await Kitten.find();
    console.log(kittens);
}
