const express = require("express");
const app = express();

app.use(express.json());

const EMAIL = "disha0327.be23@chitkara.edu.in";

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.get("/health", (req, res) => {
  res.json({
    is_success: true,
    official_email: EMAIL
  });
});

app.post("/bfhl", (req, res) => {
  res.json({
    is_success: true,
    official_email: EMAIL,
    data: "API Working"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running on", PORT);
});