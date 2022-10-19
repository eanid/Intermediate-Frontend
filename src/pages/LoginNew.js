import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/action/user';


const LoginNew = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const stateUser = useSelector((state) => {
        return state.user
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form)

        const handleSuccess = (data) => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("data", JSON.stringify(data.data));
            const check =
                data.data === null
                    ? alert("email or password is wrong")
                    : navigate("/");
            return check;
        }

        dispatch(login(form, handleSuccess))

        // .then((response) => {
        //     localStorage.setItem("token", response.data.data)
        //     localStorage.setItem("data", JSON.stringify(response.data.status));
        //     const check =
        //         response.data.data === null
        //             ? alert("email or password is wrong")
        //             : navigate("/");
        //     return check;

        // }).catch((err) => {
        //     alert(err);
        // })
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="username"></label>
                                <input type="text" placeholder="Username" className="form-control" name="username" onChange={handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password"></label>
                                <input type="password" placeholder="password" className="form-control" name="password" onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">{stateUser.isLoading ? "Loading..." : "Submit"}</button>

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginNew;