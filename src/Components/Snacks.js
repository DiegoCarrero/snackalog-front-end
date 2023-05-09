import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SnackIndex from './SnackIndex';

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnack] = useState([]);

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((res) => setSnack(res.data))
            .catch((e) => console.warn(e))
    })

    return (
        <div>
            {
                snacks.map((snack) => {
                    return <SnackIndex key={snack.id} snack={snack} />
                })
            }
            <button>New Snack</button>
        </div>
    )
}
