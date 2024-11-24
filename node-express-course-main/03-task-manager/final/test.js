// getting-started.js
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
<<<<<<< HEAD
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
=======
  await mongoose.connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //schema
  const kittySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "de na be"],
      get: (value) => value.toUpperCase(),
      set: (value) => value.toLowerCase(),
    },
  });

  /**
   * get_cc - modify cc_number before saving to database
   * @param {String} val - value of cc_number
   * @returns {String} modified cc_number
   */
  function get_cc(val) {
    return "xxxx-xxxx-xxxx-" + val.slice(12, 16);
  }
  const accountSchema = { cc_number: { type: String, get: get_cc } };
  const Account = mongoose.model("Account", accountSchema);
  // const sahil = new Account({ cc_number: "1234567890123456" });

  // console.log(sahil.cc_number); // prints "xxxx-xxxx-xxxx-3456"
  await Account.find({}, (err, data) => {
    for(a of data){
      console.log(a.cc_number);
    }
  });
  // console.log();
  mongoose.disconnect();
>>>>>>> 732fb4e (commit from pc on 24/11)
}
