import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import LoginComponent from './loginComponent'

const LoginModal = ({ state, changeUser }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class='col d-flex justify-content-end'>
                <form class='form-group d-flex '>
                    <button class='btn btn-outline-light pt-2 p-3'
                        type="button"
                        style={{ fontWeight: 'bold', color: state.login, backgroundColor: 'white' }}
                        onClick={handleShow}
                    >login
                    </button>
                </form>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <LoginComponent state={state} setShow={setShow} changeUser={changeUser} />
                </Modal.Body>
            </Modal>
        </>
    );
}



export default LoginModal