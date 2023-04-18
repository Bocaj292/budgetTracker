import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const NewTransaction = (props)=>{


    const [fromTo, setFromTo] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

const submitHandler = (e)=>{
    e.preventDefault();
// the preventDefault prevents the page from refreshing and loading the data
// axios takes the data as a post request and sends it through the route given
    axios.post("http://localhost:8000/api/transactions", {
            fromTo,
            description,
            amount,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setFromTo("");
            setDescription("");
            setAmount("");
            navigate(`/`)
    // after the form is submitted the user will be redirected to the home page
        })
        .catch((err) => {
            console.log(err);
        });
}


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
                    <input type="submit" value="Add Transaction" class="submit" />
                </form>
                </div>
            </div>
        </div>
    )
}

export default NewTransaction;