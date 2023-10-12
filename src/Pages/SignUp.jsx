/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from 'firebase/app'; 
import 'firebase/database';

function SignUp() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({ ...data, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    }

    function validation() {
        let result = true;
        if (data.username === "") {
            toast.error('Username is empty');
            result = false;
        }
        if (data.email === "") {
            toast.error('Email is empty');
            result = false;
        }

        if (data.phone === "") {
            toast.error('Phone is empty');
            result = false;
        }
        if (data.password === "") {
            toast.error('Password is empty');
            result = false;
        }
        return result;
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validation()) {
            return;
        }

        try {
            const db = firebase.database();
            const usersRef = db.ref('users');

            // Create a new user object with unique data
            const newUser = {
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password,
            };

            // Push the new user object to the database
            const newUserRef = usersRef.push(newUser);
            const userId = newUserRef.key;

            toast.success('Sign-up successful');
            navigate('/profile');
            setData({ username: '', email: '', phone: '', password: '' });
        } catch (error) {
            console.error('Error:', error);
            // Handle errors as needed
        }
    };


    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 }}>
                <div className="row " >
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                        <div className="panel-body">
                            <form role="form" style={{ width: "300px", marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <h5>Enter Details to Sign Up</h5>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="text" value={data.username} name='username' className="form-control" onChange={handleChange} placeholder="User Name " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="email" value={data.email} className="form-control" name='email' onChange={handleChange} placeholder="Your Email " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-tag" /></span>
                                    <input type="number" value={data.phone} className="form-control" name='phone' onChange={handleChange} placeholder="Your phone " />
                                </div>
                                <div className="form-group input-group" style={{ padding: 10 }}>
                                    <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                    <input type="password" value={data.password} className="form-control" name='password' onChange={handleChange} placeholder="Your Password" />
                                </div>
                                <button type='submit' onClick={onSubmit} className="btn btn-primary w-100 py-3">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
