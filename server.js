require("dotenv").config();
const cors = require("cors");
const app = require("./app.js");
const port = process.env.PORT;

const corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
