import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

//                                  object destructuring      -  {}assigned empty object if no exist
export default function UseFetch(url, { method, headers, body } = {}) {

    const [data, setData] = useState();
    const [errorStatus, setErrorStatus] = useState();

    const location = useLocation();
    const navigate = useNavigate();

    function request() {
        fetch(url, {
            method: method,
            headers: headers,
            body: body,
        }).then((response) => {
            if (response.status === 401) {
                navigate("/login", {
                    state: {
                        previousUrl: location?.pathname,
                    },
                });
            }
            if (!response.ok) {
                throw (response.status);
            }
            return response.json();

        }).then((data) => {
            setData(data);
        }).catch((e) => {
            setErrorStatus(e);
        });
    }

    // function to add new customer throgh post
    function appendData(newData) {
        //fetch
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newData)
        }).then((response) => {
            if (response.status === 401) {
                navigate("/login", {
                    state: {
                        previousUrl: location?.pathname,
                    },
                });
            }
            if (!response.ok) {
                throw response.status;
            }
            return response.json()
        }).then((d) => {
            //add object to array
            const submitted = Object.values(d)[0];
            //duplicate object
            const newState = { ...data };
            //push that object 
            Object.values(newState)[0].push(submitted);
            //
            setData(newState);
        }).catch((e) => {
            setErrorStatus(e);
            console.log(e);
        });
    }

    //returning destructuring objects properties
    return { request, appendData, data, errorStatus };
}
