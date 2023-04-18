const { create } = require("../models/transaction.model");
const Transaction = require("../models/transaction.model")


module.exports = {
    createTransaction: (req, res)=> {
        // the createTransaction function takes Transaction from the model and uses .create to take data as a request and export that request to the routes as a response
                Transaction.create(req.body)
                    .then((newTransaction) => res.json(newTransaction))
                    .catch((err) => console.log(err));
            },

    getAllTransactions: (req, res)=> {
        Transaction.find({})
        .then((allTransactions)=>{
            console.log(allTransactions);
            res.json(allTransactions);
        })
        .catch((err) => console.log(err))
    },
// these two functions work generally the same way, but they have to use different methods because getOneTransaction has to add in the id as a parameter to grab it specfically
    getOneTransaction: (req, res)=> {
        Transaction.findOne({_id: req.params.id })
            .then((oneTransaction) =>{
                console.log(oneTransaction);
                res.json(oneTransaction);
            })
    },

// update works basically as a find one and a create, it is found by the id and then is changed by the body and accepted as the new value by the new:true
    updateTransaction: (req, res) => {
        Transaction.findOneAndUpdate({_id: req.params.id}, 
            req.body, 
            {new:true, runValidators: true}
            )
            .then((updatedTransaction) => {
                console.log(updatedTransaction);
                res.json(updatedTransaction);
            })
            .catch((err) => console.log(err))
    },

    deleteTransaction: (req, res) => {
        Transaction.deleteOne({_id: req.params.id})
            .then((deletedTransaction) => {
                console.log(deletedTransaction);
                res.json(deletedTransaction)
            })
            .catch((err) => console.log(err))
    }



};