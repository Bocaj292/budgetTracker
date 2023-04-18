import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'


const EditTransaction = (props)=>{

    const {id} = useParams();
    const [fromTo, setFromTo] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/transactions/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setFromTo(res.data.fromTo);
                setDescription(res.data.description);
                setAmount(res.data.amount);
            })
            .catch((err) => console.log(err))
    }, [id])


    const submitHandler = (e)=>{
        e.preventDefault();

    // we can shorthand this function because the getter and the key in the schema are the same
        axios.put(`http://localhost:8000/api/transactions/${id}`,{
            fromTo,
            description,
            amount
        })
        .then((res) => {
            console.log(res)
            console.log(res.data)
            navigate("/");
        })
        .catch((err) => console.log(err))
    }




// nothing needed to be changed on the form itself since state will hold the data in the input
    return(
        <div class="container">
            <div class="header">
                <div class="title">
                    <h1>Budget Tracker</h1>
                </div>
                <div class="nav">
                    <Link to="/">Home Page</Link>
                    <Link to="/dash">View All Transactions</Link>
                </div>
            </div>
            <div class="content">
                <div class="form">
                <form onSubmit={submitHandler}>
                    <div class="item">
        {/* then to pass in all of the data a simple form is given */}
                        <label>From/To:</label>
                        <input
                            onChange={(e) => setFromTo(e.target.value)}
                            value={fromTo}
                            name="fromTo"
                            type="text"
                            />
                    </div>


                    <div class="item">
                        <label>Description:</label>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            name="description"
                            type="text"
                            />
                    </div>


                    <div class="item">
                        <label>Amount:</label>
                        <input
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            name="amount"
                            type="number"
                            />
                    </div>
                    <input type="submit" value="Edit Transaction" class="submit" />
                </form>
                </div>
            </div>

        </div>
    )

}

export default EditTransaction;