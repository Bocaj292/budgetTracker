const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:3000",
    }),
);
// cors gives us the ability to handle requests from different origins

require("./config/mongoose.config");
require("./routes/transaction.routes")(app);

app.listen(8000, () => {
    console.log(`Listening on port ${port}`)
});