const express = require("express");
const app = express();

app.use(express.json());

const EMAIL = "disha0327.be23@chitkara.edu.in";

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
    data: "working"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});