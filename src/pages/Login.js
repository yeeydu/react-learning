import { useState, useContext } from 'react';
import { baseUrl } from '../shared';
import { useLocation, useNavigate } from 'react-router';
import { LoginContext } from '../App'

function Login() {

    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    const navigate = useNavigate();


    function login(e) {
        const url = baseUrl + 'api/token/'; //back end url is token

        e.preventDefault();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            localStorage.setItem('access', data.access) // add local storage
            localStorage.setItem('refresh', data.refresh)
            console.log(localStorage.access)
            setLoggedIn(true)
            navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers')
        })
    }

    return (
        <form id='customer' className='w-full max-w-sm' onSubmit={login}>
            <div className="mb-3 ">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input
                    id='username'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type='text'
                    value={username}
                    autoComplete='username'
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                    id='password'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type='password'
                    value={password}
                    autoComplete='current-password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
            </div>
            <button
                className='m-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit"
            >
                Login
            </button>
        </form>
    );
}

export default Login;