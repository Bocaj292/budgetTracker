import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Transactions = (props) => {

    const {transactionList, setTransactionList} = props;
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/transactions")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setTransactionList(res.data);
                setTotal(res.data.reduce((acc, cur) => acc + cur.amount, 0))
            })
            .catch((err) => console.log(err))
    }, [setTransactionList])
    // this request will grab all of the transactions from the db then put them into an array that will later be mapped through


    return(
        <div class="main">
            <div class="left">
                <div class="thead">
                    <p>Recent Transactions:</p>
                </div>
                <div class="all">
                    <ul>
            {/* on the side of the page will just display some recent transactions by mapping through the objects in the db provided through an array */}
                        {transactionList.map((transaction, index) => (
                            <li key={transaction._id}>
                                <p>${transaction.amount}</p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="data">
                    <p>Your Balance</p>
                    {/* by adding all of the transactions together from the array will grab the total and put it into state which can be grabbed */}
                    <p>${total}</p>
                    <Link to="/new/transaction">Add Transaction</Link>
                </div>
            </div>
        </div>
    )


}

export default Transactions;