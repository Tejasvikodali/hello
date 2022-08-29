const express = require("express");
const app = express();
const port = process.env.PORT || 6069;

console.log("Hello Pavan sir");
app.get("/", (req, res) => {
  res.send("Hello Pavan sir!");
  console.log("Hello Pavan sir");
});

app.listen(port, () => {
  console.log(
    `App listening at mongodb+srv://vidlyuser:vidlypass@cluster0.7ofhy.mongodb.net/?retryWrites=true&w=majority :${port}`
  );
  console.log("Hello Pavan sir");
});
