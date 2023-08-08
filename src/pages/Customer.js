import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import NotFound from './NotFound';
import { baseUrl } from '../shared';
import { LoginContext } from '../App'

export default function Customer() {

    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    const [customer, setCustomer] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [tempCustomer, setTempCustomer] = useState([]);
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();

    const { id } = useParams() // use params returns an object {id} returns a paramter of object
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
        })
            .then((response) => {
                if (response.status === 404) {
                    // redirect to 404 page
                    //navigate('/404');
                    // render 404 component
                    setNotFound(true);
                } else if (response.status === 401) {
                    setLoggedIn(false)
                    navigate("/login", {
                        state: {
                            previousUrl: location?.pathname,
                        },
                    });
                }
                if (!response.ok) throw new Error('Something went wrong')
                return response.json()
            })
            .then((data) => {
                setTempCustomer(data.customer)
                setCustomer(data.customer) //.customer to get inside /property
                setError(undefined)
            }).catch((e) => {
                setError(e.message)
            })
    }, [])

    function deleteCustomer() {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', // define content type in fetch
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            }
        })
            .then((response) => {
                if (response.status === 401) {
                    setLoggedIn(false)
                    navigate("/login", {
                        state: {
                            previousUrl: location?.pathname,
                        },
                    });
                }
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                navigate('/customers')
            }).catch((e) => {
                setError(e.message)
            })

    }


    function updateCustomer(e) {
        e.preventDefault();
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify(tempCustomer),
        })
            .then((response) => {
                if (response.status === 401) {
                    setLoggedIn(false)
                    navigate("/login", {
                        state: {
                            previousUrl: location?.pathname,
                        },
                    });
                }
                if (!response.ok) throw new Error('Something went wrong')
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
                (<>
                    <form id='customer' onSubmit={updateCustomer} className='w-full max-w-sm'>
                        <div className="mb-3 ">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                id='name'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type='text'
                                value={tempCustomer.name}
                                onChange={(e) => {
                                    setTempCustomer({ ...tempCustomer, name: e.target.value })
                                    setChanged(true)
                                }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="industry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                            <input
                                id='industry'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type='text'
                                value={tempCustomer.industry}
                                onChange={(e) => {
                                    setTempCustomer({ ...tempCustomer, industry: e.target.value })
                                    setChanged(true)
                                }} />
                        </div>
                    </form>
                    {changed ? (
                        <div className=''>
                            <button form='customer'

                                className='m-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >Save</button>
                            <button
                                className='m-1  text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'

                                onClick={(e) => {
                                    setTempCustomer({ ...customer });
                                    setChanged(false)
                                }}>Cancel</button>
                        </div>
                    ) : null}

                    <div>
                        <button
                            className='m-1  text-white  bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
                            onClick={deleteCustomer}
                        >Delete</button>
                    </div>
                </>) : null}
            {error ? <p>{error} </p> : null}
            <button className='mx-1 my-2 '>
                <Link
                    to={"/customers"}
                    className=' m-1 px-4 py-1 text-sm font-semibold rounded-3xl border border-purple-200 text-white bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 '
                >Back</Link>
            </button>
        </>
    )
}
