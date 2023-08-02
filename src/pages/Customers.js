import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared';
import AddCustomer from '../components/AddCustomer';


export default function Customers() {

    const [customers, setCustomers] = useState([]);
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show)
    }

    useEffect(() => {
        //console.log("fetching..")
        const url = baseUrl + 'api/customers/';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCustomers(data.customers);
            })
    }, [])


    function newCustomer(name, industry) {
        const data = { name: name, industry: industry }
        const url = baseUrl + 'api/customers/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                toggleShow();
                setCustomers([...customers, data.customer]); //

            }).catch((e) => {
                console.log(e)
            })
    }

    return (
        <>
            <h1>Our customers</h1>
             
                {customers ? customers.map((customer) => {
                    return (
                        <div key={customer.id}>
                            <Link to={"/customers/" + customer.id}>
                                <button
                                className=' mx-2 px-3 py-1 my-1 text-sm font-semibold rounded border border-purple-200 text-white bg-gray-600 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 '
                                >{customer.name}</button>
                                </Link>
                        </div>
                    )
                }) : null}
             
            <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow} />
        </>
    )
}
