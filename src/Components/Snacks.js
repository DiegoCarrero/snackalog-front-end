import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SnackIndex from './SnackIndex';

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((res) => setSnacks(res.data))
            .catch((e) => console.warn(e))
    }, [])

    return (
        <div className='snacks'>
            <h1>SNACKS</h1>
            <form>
                <span>
                    <input
                        id="is_healthy"
                        type="checkbox"
                        onChange={true}
                        checked={false}
                    />
                    <label htmlFor="healthy">Healthy Snacks</label>
                </span>
                <span>
                    <input
                        id="low_sodium"
                        type="checkbox"
                        onChange={true}
                        checked={false}
                    />
                    <label htmlFor="lowSodium">Low Sodium</label>
                </span>
                <span>
                    <input
                        id="low_calorie"
                        type="checkbox"
                        onChange={true}
                        checked={false}
                    />
                    <label htmlFor="lowCalorie">Low Calorie</label>
                </span>
                <span>
                    <input
                        id="low_sugar"
                        type="checkbox"
                        onChange={true}
                        checked={false}
                    />
                    <label htmlFor="lowSugar">Low Sugar</label>
                </span>
                <span>
                    <input
                        id="high_fiber"
                        type="checkbox"
                        onChange={true}
                        checked={false}
                    />
                    <label htmlFor="highFiber">High Fiber</label>
                </span>
            </form>
            <section>
                {
                    snacks.map((snack) => {
                        return <SnackIndex key={snack.id} snack={snack} />
                    })
                }
                <button>New Snack</button>
            </section>
        </div>
    )
}
