import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './Customer.css';
const CreateCustomer = () => {
    const navigate = useNavigate();
    const createCustomerApi = "http://localhost:8080/customers"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        birthday: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value)
        setCustomer({ ...customer, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        console.log(customer)
        try {
            setIsLoading(true);
            const response = await fetch(createCustomerApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                setCustomer({name: "",email: "",phone: ""})
                navigate('/show-customer');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <div className='customer-form'>
            <div className='heading'>
            {isLoading && <Loader />}
            {error && <p>Error: {error}</p>}
                <p>Customer Form</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={customer.name} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={customer.address} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={customer.email} onChange={handelInput} />
                </div>
                <div className="mb-3 mt-3">
                    <label for="birthday" className="form-label">Birthday</label>
                    <input type="date" className="form-control" id="birthday" name="birthday" value={customer.birthday} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={customer.phone} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateCustomer