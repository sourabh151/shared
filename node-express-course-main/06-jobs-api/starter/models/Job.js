const mongoose = require("mongoose");

const job = new mongoose.Schema({
    company: {
        type: String,
        required:[true,"please provide name of company"],
        maxlength:50
    },
    position: {
        type: String,
        required:[true,"please provide name of position"],
        maxlength:100
    },
    status:{
        type:String,
        enum:["interview","pending","cancelled"],
        $jsonSchema: {
            bsonType: 'string',
            enum: ['Interview', 'Pending', 'Cancelled']
          },
        default:"pending"
    },
    createdBy:{
        type : mongoose.Types.ObjectId,
        ref:"User",
        required:[true,"please provide owner id of the job"]
    }
})
// const job = await Job.findOne({ /* query */ });
// await job.populate('createdBy').execPopulate();
// console.log(job.createdBy); // prints the related User document
module.exports = mongoose.model("Job", job);
