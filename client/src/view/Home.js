import '.././App.css'
import React, {useState} from 'react'
import Transactions from '../components/Transactions';
import {Link} from 'react-router-dom'

const Home = (props) => {

    const [transactionList, setTransactionList] = useState([]);

    return(
        <div class="container">
            <div class="header">
                <div class="title">
                    <h1>Budget Tracker</h1>
                </div>
                <div class="nav">
                    <Link to="/dash">View All Transactions</Link>
                    <Link to="/new/transaction">Add Transaction</Link>
                </div>
            </div>
            <div class="recent">
                <Transactions transactionList={transactionList} setTransactionList={setTransactionList}/>
            </div>
        </div>
    )

}

export default Home;