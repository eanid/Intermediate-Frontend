import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tambahData } from '../redux/action/count';
import { getList } from '../redux/action/user';

const Home = () => {

    // untuk get action
    const dispatch = useDispatch();

    // useSelector untuk get reducer
    const state = useSelector((state) => {
        return state.count
    })

    const user = useSelector((state) => {
        return state.user
    })

    const onTambah = () => {
        dispatch(tambahData());
    }

    // 
    useEffect(() => {
        dispatch(getList());
    }, [])

    return (
        <>
            <h1>Halaman Home</h1>
            Nilai : {state.nilai}
            <hr />
            <button onClick={() => onTambah()}>Tambah</button>

            {/* {JSON.stringify(user)} */}

            {
                user.isLoading ? (
                    <h1>Loading</h1>
                ) : user.isError ? (
                    <h1>Error</h1>
                ) : (
                    user.users.map((item, index) => (
                        <div key={index}>
                            {item.name}
                        </div>
                    )
                    ))
            }


        </>
    )

}

export default Home;

// Perlu disolving
// Actions must be plain objects redux promise middleware