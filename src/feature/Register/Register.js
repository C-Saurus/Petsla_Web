import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { Modal, Button, Form } from 'react-bootstrap';
import { registerUser } from '../../service/apiRequest';
import { useDispatch } from 'react-redux'
import { successToast, errorToast } from '../../utils/toastify'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../utils/validateForm/index'
export default function Register() {
    const [load, setLoad] = useState(false)
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = () => {
        setLoad(true)
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
                successToast('Đăng ký thành công!')
                navigate("/login")
            }
            else {
                errorToast('Email hoặc Username đã được dùng')
                setLoad(true)
            }
        })
    }

    const handleOnhide = () => {
        navigate("/shop")
    }

    const {
        register,
        handleSubmit,
        formState: { errors },

      } = useForm({
        mode: "onTouched",
        resolver: yupResolver(registerSchema)
      });
    return (
        <div>
            <Modal show={true} onHide={handleOnhide} centered dialogClassName="modal-90w">
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="First name..."
                                value={fname}
                                name='firstName'
                                {...register('firstName')}
                                onChange={e => setFname(e.target.value)} />
                            <Form.Text className='text-danger'>
                                {errors.firstName?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Last name..."
                                value={lname}
                                name='lastName'
                                {...register('lastName')}
                                onChange={e => setLname(e.target.value)} />
                            <Form.Text className='text-danger'>
                                {errors.lastName?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email..."
                                value={email}
                                name='email'
                                {...register('email')}
                                onChange={e => setEmail(e.target.value)} />
                            <Form.Text className='text-danger'>
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Username..."
                                value={username}
                                name="username"
                                {...register("username")}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <Form.Text className='text-danger'>
                                {errors.username?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password..."
                                value={password}
                                name="password"
                                {...register("password")}
                                onChange={e => setPassword(e.target.value)}/>
                            <Form.Text className='text-danger'>
                                {errors.password?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="d-grid">
                            <Button variant="success" type="submit" disabled={load}>
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
        </div>
    )
}
