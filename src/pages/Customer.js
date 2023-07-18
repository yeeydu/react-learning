import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Customer() {
    const [customer, setCustomer] = useState();
    const { id } = useParams() // use params returns an object {id} returns a paramter of object

    useEffect(() => {
        const url = 'http://localhost:8000/api/customers/' + id;
        fetch(url)
            .then((response) => { return response.json() })
            .then((data) => {
                setCustomer(data.customer) //.customer to get inside /property
            })
    }, [])


    return (
        <>{customer ?
            <div>{customer.id}
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
            </div>
            : null}
            <Link to={"/customers"}>Back</Link>
        </>
    )
}
