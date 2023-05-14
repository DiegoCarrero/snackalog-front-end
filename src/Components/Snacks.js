import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SnackIndex from './SnackIndex';
import Filters from './Filters';

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [allSnacks, setAllSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((res) => {
                setSnacks(res.data)
                setAllSnacks(res.data)
                console.log(snacks)
            })
            .catch((e) => console.warn(e))
    }, [])

    return (
        <div className='snacks'>
            <h1>SNACKS</h1>
            <Filters setSnacks={setSnacks} allSnacks={allSnacks} />
            <section>
                {
                    snacks.map((snack) => {
                        return <SnackIndex key={snack.id} snack={snack} />
                    })
                }
            </section>
        </div>
    )
}
