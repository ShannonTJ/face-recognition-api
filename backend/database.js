import mongoose from "mongoose";

const connection =
  "mongodb+srv://AmazonaAdmin:1234@amazona-shard-00-01.gcsrx.mongodb.net:27017/Amazona?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
