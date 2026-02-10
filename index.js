const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    is_success: true,
    official_email: "disha0327.be23@chitkara.edu.in"
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

    res.json({
      is_success: true,
      official_email: "disha0327.be23@chitkara.edu.in",
      data: arr.slice(0, n)
    });
  } else {
    res.json({
      is_success: true,
      official_email: "disha0327.be23@chitkara.edu.in",
      data: "No input"
    });
  }
});

app.listen(3000, () => {
  console.log("Server running");
});