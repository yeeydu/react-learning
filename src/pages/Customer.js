import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import NotFound from './NotFound';
import { baseUrl } from '../shared';


export default function Customer() {
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);

    const { id } = useParams() // use params returns an object {id} returns a paramter of object
    const navigate = useNavigate();

    useEffect(() => {
        const url = baseUrl +'api/customers/' + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    // redirect to 404 page
                    //navigate('/404');
                    // render 404 component
                    setNotFound(true);
                }
                return response.json()
            })
            .then((data) => {
                setCustomer(data.customer) //.customer to get inside /property
            })
    }, [])


    return (
        <>
            {notFound ? <NotFound message={"Customer not found !"} /> : null}
            {customer ?
                <div key={customer.id}>
                    <p>{customer.name}</p>
                    <p>{customer.industry}</p>
                </div>
                : null}
            <Link to={"/customers"}>Back</Link>
        </>
    )
}
