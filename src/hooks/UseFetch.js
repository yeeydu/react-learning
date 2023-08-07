import React, { useEffect, useState } from 'react'

export default function UseFetch(url) {

    const [data, setData] = useState(url);
    const [errorStatus, setErrorStatus] = useState();

    useEffect(() => {
        fetch(url).then((response) => {
            if (!response.ok) {
                throw (response.status);
            }
            return response.json();

        }).then((data) => {
            setData(data);
        }).catch((e) => {
            setErrorStatus(e);
        });
    }, []);

    return [data, errorStatus];
}
