import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
import {Modal, Button, Form} from 'react-bootstrap';
import { registerUser } from '../../../redux/actions/auth/apiRequest';
import { useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        firstName: fname,
        lastName: lname,
        email: email,
        username: username,
        password: password,
        first_name: fname,
        last_name: lname,
    };
    registerUser(newUser, dispatch).then((res) => {
        console.log(res)
        if (res) {
            toast.success('Đăng ký thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login")
        }
        else {
            toast.error('Vui lòng kiểm tra lại thông tin đăng ký', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    })
  }
  const handleOnhide = () => {
    navigate("/shop")
  }
  return (
    <div>
        <Modal show={true} onHide={handleOnhide} centered dialogClassName="modal-90w">
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="First name..." 
                        value={fname}
                        onChange={e => setFname(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Last name..." 
                        value={lname}
                        onChange={e => setLname(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email..." 
                        value={email}
                        onChange={e => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Username..." 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password..." 
                        value={password}
                        onChange={e => setPassword(e.target.value)} required />
                    </Form.Group>
                    
                    <Form.Group className="d-grid">
                        <Button variant="success" type="submit">
                            Register
                        </Button>
                    </Form.Group>
                </Form>
                <div className='separate-wrap'>
                        <div className='separate-dash'></div>
                        <div className='separate-text'>or</div>
                        <div className='separate-dash'></div>
                </div>
                <div>
                    <div className="d-grid gap-3">
                        <Button variant="danger" size="md">
                            Login with Google
                        </Button>
                        <Button variant="primary" size="md">
                            Login with Facebook
                        </Button>
                    </div>
                </div>
            </Modal.Body>
            
        </Modal>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
        <ToastContainer />
    </div>
  )
}