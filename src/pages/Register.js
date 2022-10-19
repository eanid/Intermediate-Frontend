import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe, register } from '../redux/action/user';
import { useDispatch } from 'react-redux'

const Insert = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        username: '',
        phone: '',
        password: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        if (form.username == "" || form.phone == "" || form.password == "") {
            alert('Semua input wajib diisi')
        } else {
            const body = {
                username: form.username,
                phone: form.phone,
                password: form.password
            }

            const handleSuccess = () => {
                return navigate('/loginnew')
            }

            dispatch(register(body, handleSuccess));
            // register(body)
            //     .then((response) => {
            //         console.log(response.data);
            //         alert("Data berhasil tersimpan");
            //         return navigate('/loginnew')
            //     })
            //     .catch((err) => {
            //         alert(err);
            //     });
        }
    }
    return (
        <>

            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group m-1">
                    <input type="text" className="form-control" onChange={handleChange} name="username" placeholder="username" />
                </div>
                <div className="form-group m-1">
                    <input type="text" className="form-control" onChange={handleChange} name="phone" placeholder="phone" />
                </div>
                <div className="form-group m-1">
                    <input type="text" className="form-control" onChange={handleChange} name="password" placeholder="password" />
                </div>
                <div className="form-group m-1">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>

        </>
    )

}

export default Insert;