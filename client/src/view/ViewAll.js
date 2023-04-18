import '.././App.css'
import '.././Table.css'
import React, {useState} from 'react'
import AllTransactions from '../components/AllTransactions';
import {Link} from 'react-router-dom'

const ViewAll = (props) => {

    const [transactionList, setTransactionList] = useState([]);

    return(
        <div class="container">
            <div class="header">
                <div class="title">
                    <h1>Budget Tracker</h1>
                </div>
                <div class="nav">
                    <Link to="/">Home Page</Link>
                    <Link to="/new/transaction">Add Transaction</Link>
                </div>
            </div>
            <div class="recent">
                <AllTransactions transactionList={transactionList} setTransactionList={setTransactionList}/>
            </div>
        </div>
    )

}

export default ViewAll;