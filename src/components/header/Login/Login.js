import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import {useNavigate} from 'react-router-dom'
import {Modal, Button, Form} from 'react-bootstrap';
import { loginUser } from '../../../redux/actions/auth/apiRequest';
import { useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        username: username,
        password: password
    };
    loginUser(newUser, dispatch).then((res) => {
        if (res) {
            toast.success('Đăng nhập thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/shop")
        }
        else {
            toast.error('Sai tên đăng nhập hoặc mật khẩu', {
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
  const handleRegister = () => {
    navigate("/register")
  }
  return (
    <div>
       <Modal show={true} onHide={handleOnhide} centered dialogClassName="modal-90w">
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Form.Group className="d-grid">
                        <Button variant="success" type="submit">
                            Login
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
                <div>
                    <div className='change-modal-wrap'>
                        <div onClick={handleRegister} className='change-to-register' >Do not have an account? Register</div>
                        <div className='forgot-password'>Forgot password?</div>
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
