import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const OneTransaction = (props) => {


    const {id} = useParams();
    const [oneTransaction, setOneTransaction] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/transactions/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setOneTransaction(res.data);
            })
            .catch((err)=> console.log(err))
    }, [id])
// this get request uses the id of the object to pull it directly from the db

    const deleteFilter = (id)=>{
        axios.delete(`http://localhost:8000/api/transactions/${id}`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                console.log("Naviagting to root route...")
                navigate('/')

            })
            .catch((err) => console.log(err))
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
                <div class="details">
                    {/* with the use of state and dotnotation we can display the object's data */}
                    <p>From/To:   {oneTransaction.fromTo}</p>
                    <p>Description:   {oneTransaction.description}</p>
                    <p>Amount   {oneTransaction.amount}</p>
                    <hr></hr>
                    <p>Make a mistake?</p>
                    <div class="actions">
                        <Link to={`/edit/transaction/${oneTransaction._id}`}>Edit Transaction Details</Link>
                        <button onClick={()=>deleteFilter(oneTransaction._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OneTransaction;