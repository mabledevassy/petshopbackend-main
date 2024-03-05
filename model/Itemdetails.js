const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/Pets?retryWrites=true&w=majority")
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => console.log(err));

let it=mongoose.Schema;


const itemschema = new it({
  sid: { type:mongoose.Schema.Types.ObjectId, ref: "subcats" },
  Description: String,
  Price: Number,
  image1: {
    data: Buffer,  // If storing images as binary data
    contentType: String,
  },
});

const itemmodel = mongoose.model("Item", itemschema);

module.exports = itemmodel;
