const mongoose = require("mongoose");

const dbName = "budgetTracker";
// we need to connect to the database by passing in the appropriate path, it can be hardcoded or passed in through a variable
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
// if the connection is successful the console will display the first message if not it will display the second
    .then(() => console.log(`Established a connection to ${dbName}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));