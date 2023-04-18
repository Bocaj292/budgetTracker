const TransactionController = require("../controllers/transaction.controller");

module.exports = (app) => {
    app.post("/api/transactions", TransactionController.createTransaction)
    app.get("/api/transactions", TransactionController.getAllTransactions)
    app.get("/api/transactions/:id", TransactionController.getOneTransaction)
    app.put("/api/transactions/:id", TransactionController.updateTransaction)
    app.delete("/api/transactions/:id", TransactionController.deleteTransaction)
}