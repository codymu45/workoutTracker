const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => console.log("Connected to Mongodb"))
.catch((err) => console.log(err));


app.listen(PORT, () => {
  console.log(`App running on ${PORT}!`);
});
