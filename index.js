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
  const body = req.body;

  if (body.fibonacci) {
    let n = body.fibonacci;
    let arr = [0, 1];

    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }

    return res.json({
      is_success: true,
      official_email: EMAIL,
      data: arr.slice(0, n)
    });
  }

  res.json({
    is_success: true,
    official_email: EMAIL,
    data: "Working"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});