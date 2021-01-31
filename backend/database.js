import mongoose from "mongoose";

const connection =
  "mongodb+srv://AmazonaAdmin:1234@mongodb.net:27017/Amazona?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
