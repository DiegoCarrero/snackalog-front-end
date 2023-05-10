import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SnackIndex from './SnackIndex';

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [sodium, setSodium] = useState(false)
    const [calories, setCalories] = useState(false)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((res) => setSnacks(res.data))
            .catch((e) => console.warn(e))
    }, [])

    const handleCheckboxChange = (item, setItem) => {
        setItem(!item)
    }

    const filteringSodium = () => {
        if (sodium) {
            const filteredArr = snacks.filter((snack) => snack.sodium <= 5)
            setSnacks(filteredArr)
        }
    }

    const filteringCalories = () => {
        if (calories) {
            const filteredArr = snacks.filter((snack) => snack.calories <= 150)
            setSnacks(filteredArr)
        }
    }

    useEffect(() => {
        filteringSodium()
    }, [sodium])

    useEffect(() => {
        filteringCalories()
    }, [calories])

    return (
        <div className='snacks'>
            <h1>SNACKS</h1>
            <form>
                <span>
                    <input
                        id="is_healthy"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={checked}
                    />
                    <label htmlFor="healthy">Healthy Snacks</label>
                </span>
                <span>
                    <input
                        id="low_sodium"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(sodium, setSodium)}
                        checked={sodium}
                    />
                    <label htmlFor="lowSodium">Low Sodium</label>
                </span>
                <span>
                    <input
                        id="low_calorie"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(calories, setCalories)}
                        checked={calories}
                    />
                    <label htmlFor="lowCalorie">Low Calorie</label>
                </span>
                <span>
                    <input
                        id="low_sugar"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={checked}
                    />
                    <label htmlFor="lowSugar">Low Sugar</label>
                </span>
                <span>
                    <input
                        id="high_fiber"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        checked={checked}
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
