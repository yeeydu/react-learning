import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCustomer(props) {

    const [show, setShow] = useState(props.show);
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={props.toggleShow} className="block mx-auto m-2 px-4 py-1 text-sm font-semibold rounded-full border border-purple-200 text-white bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ">
                + Add Customer
            </button>

            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='addModal' onSubmit={(e) => {
                        e.preventDefault();
                        props.newCustomer(name, industry);
                        handleClose();
                        setName('')
                        setIndustry('')
                    }} >
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="IT Center"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                required />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="industry"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                            <input
                                type="text"
                                id="industry"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Telecomunication"
                                value={industry}
                                onChange={(e) => {
                                    setIndustry(e.target.value)
                                }}
                                required />
                        </div>
                        {/*<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>*/}

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={props.toggleShow}
                        className='text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
                        form='addModal'>
                        Close
                    </button>
                    <button
                        type="submit"
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        form='addModal'>
                        Add
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCustomer;