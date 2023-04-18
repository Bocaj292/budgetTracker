const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
// The schema defines what the object should have, for this it is going to have a from/to, description, amount, createdAt, updatedAt which is given to it by the timestamps and also an _id which is given to it by default
    fromTo:{
        type: String,
    },
    description:{
        type: String,
    },
    amount:{
        type: Number
    }
}, {timestamps: true})

const Transaction = mongoose.model("Transaction", TransactionSchema);
// the schema is defined by Transaction and then it is exported
module.exports = Transaction;