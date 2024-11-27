// getting-started.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
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
 git add  * @returns {String} modified cc_number
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
}
