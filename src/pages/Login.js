import React from "react";

const Login = () => {
    const onLogin= () =>{
        localStorage.setItem('token', '123OKE')
    }
    return(
        <>
        <h1>Halaman Login</h1>
        <button onClick={()=> onLogin()}>Login</button>
        </>
    )
}

export default Login;