import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate, json } from 'react-router-dom'
import NotFound from './NotFound';
import { baseUrl } from '../shared';


export default function Customer() {
    const [customer, setCustomer] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [tempCustomer, setTempCustomer] = useState([]);
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();

    const { id } = useParams() // use params returns an object {id} returns a paramter of object
    const navigate = useNavigate();

    useEffect(() => {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    // redirect to 404 page
                    //navigate('/404');
                    // render 404 component
                    setNotFound(true);
                }
                if(!response.ok) throw new Error('Something went wrong')
                return response.json()
            })
            .then((data) => {
                setTempCustomer(data.customer)
                setCustomer(data.customer) //.customer to get inside /property
                setError(undefined)
            }).catch((e)=>{
                setError(e.message)
            })
    }, [])

    function deleteCustomer() {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', // define content type in fetch
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                navigate('/customers')
            }).catch((e) => {
                setError(e.message)
            })

    }


    function updateCustomer() {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempCustomer),
        })
            .then((response) => {
                if(!response.ok) throw new Error('Something went wrong')
                return response.json
            })
            .then((data) => {
                //setCustomer(data.customer)
                setChanged(false);
                setError(undefined);
            })
            .catch((e) => {
                setError(e.message)
            })
    }

    return (
        <>
            {notFound ? <NotFound message={"Customer not found !"} /> : null}
            {customer ? 
                (<div>
                    <input
                        className='mb-2 block px-2'
                        type='text'
                        value={tempCustomer.name}
                        onChange={(e) => {
                            setTempCustomer({ ...tempCustomer, name: e.target.value })
                            setChanged(true)
                        }} />
                    <input
                        className='mb-2 block px-2'
                        type='text'
                        value={tempCustomer.industry}
                        onChange={(e) => {
                            setTempCustomer({ ...tempCustomer, industry: e.target.value })
                            setChanged(true)
                        }} />
                    {changed ? (
                        <>
                            <button className='m-2 ' onClick={updateCustomer}>Save</button>
                            <button className='m-2 ' onClick={(e) => {
                                setTempCustomer({ ...customer });
                                setChanged(false)
                            }}>Cancel</button>
                        </>
                    ) : null}
             
                     <div>
                        <button onClick={deleteCustomer}>Delete</button>
                     </div>
                </div>
                ) : null }
                {error ? <p>{error} </p>: null}
            <Link to={"/customers"}>Back</Link>
        </>
    )
}
