const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ message: "Hellooo Hellooo Hellooo" });
});

app.listen(3333);
