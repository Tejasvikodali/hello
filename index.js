const express = require("express");
const app = express();
const port = process.env.PORT || 8160;

console.log("Hello Pavan sir");
app.get("/print", (req, res) => {
  res.send("Hi Pavan sir!");
  console.log("Hello Pavan sir");
});

app.listen(port, () => {
  console.log(
    `App listening at mongodb+srv://vidlyuser:vidlypass@cluster0.7ofhy.mongodb.net/?retryWrites=true&w=majority :${port}`
  );
  console.log("Hello Pavan sir");
});
