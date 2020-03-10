const express = require("express");
const port = 8000;

const app = express();

app.use("/statics", express.static(__dirname + "/public/statics"));
app.use("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.listen(port, () => console.log("listening on port 8000"));
