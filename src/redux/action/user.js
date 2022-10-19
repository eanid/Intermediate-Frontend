import axios from 'axios';

export const getList = () => {
    return {
        type: 'GET_LIST_USER',
        // data nya akan dikirim ke payload
        payload: axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET'
        })

    }
}



// // INSERT, UPDATE, DELETE TANPA PAKAI REDUCER
// export const insert = (body) => {
//     return new Promise((resolve, reject) => {
//         axios.post('')
//             .then((response) => {
//                 resolve(response)
//             })
//             .catch((err) => {
//                 reject(err)
//             })
//     })
// }


export const create = (form) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/user`, form)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

// export const login = (form) => {
//     return new Promise((resolve, reject) => {
//         axios
//             .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
//             .then((response) => {
//                 resolve(response);
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     })
// };

export const login = (form, handleSuccess) => ({
    type: 'LOGIN',
    payload: new Promise((resolve, reject) => {
        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
            .then((response) => {
                console.log(response.data);
                handleSuccess(response.data.data);
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    })
});



// export const register = (form) => {
//     return new Promise((resolve, reject) => {
//         axios
//             .post(process.env.REACT_APP_BACKEND_URL + "/register", form)
//             .then((response) => {
//                 resolve(response);
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     })
// };


export const register = (form, handleSuccess) => ({
    type: 'REGISTER',
    payload: new Promise((resolve, reject) => {
        axios
            .post(process.env.REACT_APP_BACKEND_URL + "/register", form)
            .then((response) => {
                handleSuccess();
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    })
});
