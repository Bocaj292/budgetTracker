import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllTransactions = (props) => {

    const {transactionList, setTransactionList} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/transactions")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setTransactionList(res.data);
            })
            .catch((err) => console.log(err))
    }, [setTransactionList])
    // this request will grab all of the transactions from the db then put them into an array that will later be mapped through


    return(
        <div class="content">
            <div class="stuff">
                    <table>
                        <thead>
                            <tr>
                                <th>From/To</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionList.map((transaction, index) => (
                // mapping through a table row will create a new row for every transaction in the db then using dot notation to grab a specfic value
                                <tr key={transaction._id}>
                                <td>
                                    <Link to={`/transaction/${transaction._id}`}>{transaction.fromTo}</Link>
                                </td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.createdAt}</td>
                                <td>
                                    <Link to={`/edit/transaction/${transaction._id}`}>Edit</Link>
                                </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
            </div>
        </div>
    )


}

export default AllTransactions;