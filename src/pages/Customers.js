import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../shared';
import AddCustomer from '../components/AddCustomer';
import { LoginContext } from '../App'
import useFetch from '../hooks/UseFetch';

export default function Customers() {
    // set context
    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    //const [customers, setCustomers] = useState([]);
    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    function toggleShow() {
        setShow(!show)
    }
    //
    const url = baseUrl + 'api/customers/';
    //data is source:{customers} the property/ use custom fetch
    const { request, appendData, data: { customers } = {}, errorStatus } = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        },
    });

    useEffect(() => {
        request();
    }, []);

    /*
        useEffect(() => {
            const url = baseUrl + 'api/customers/';
            fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('access'),
                },
                //body: JSON.stringify(customers),
            }).then((response) => {
                setLoggedIn(false)
                if (response.status === 401) {
                    navigate("/login", {
                        state: {
                            previousUrl: location?.pathname,
                        },
                    });
                }
                return response.json()
            })
            .then((data) => {
                setCustomers(data.customers);
                }).catch(Error)
        }, [])
    */
    
    // add new customer func
    function newCustomer(name, industry) {
        appendData({ name: name, industry: industry });
        if(!errorStatus){
            toggleShow();
        }
    }

    return (
        <>
            <h1>Our customers</h1>
            {customers ?
                customers.map((customer) => {
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
