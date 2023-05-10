import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SnackIndex from './SnackIndex';

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [isHealthy, setIsHealthy] = useState(false);
    const [lowSodium, setLowSodium] = useState(false);
    const [lowCalorie, setLowCalorie] = useState(false);
    const [lowSugar, setLowSugar] = useState(false);
    const [highFiber, setHighFiber] = useState(false);

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((res) => setSnacks(res.data))
            .catch((e) => console.warn(e))
    }, [])

    const handleCheckboxChange = (item, setItem) => {
        setItem(!item)
    }

    const filteringHealthy = () => {
        if (isHealthy) {
            const filteredArr = snacks.filter((snack) => ((snack.fiber * 100)/snack.calories >= 2 && (snack.sodium * 100)/snack.calories <= 100));
            setSnacks(filteredArr);
        }
    }

    const filteringSodium = () => {
        if (lowSodium) {
            const filteredArr = snacks.filter((snack) => ((snack.sodium * 100)/snack.calories <= 20))
            setSnacks(filteredArr)
        }
    }

    const filteringCalories = () => {
        if (lowCalorie) {
            const filteredArr = snacks.filter((snack) => snack.calories <= 150)
            setSnacks(filteredArr)
        }
    }

    const filteringSugar = () => {
        if (lowSugar) {
            const filteredArr = snacks.filter((snack) => ((snack.sugar * 100)/snack.calories <= 5));
            setSnacks(filteredArr);
        }
    }

    const filteringFiber = () => {
        if (highFiber) {
            const filteredArr = snacks.filter((snack) => ((snack.fiber * 100)/snack.calories >= 5));
            setSnacks(filteredArr);
        }
    }

    useEffect(() => {
        filteringHealthy()
    }, [isHealthy])

    useEffect(() => {
        filteringSodium()
    }, [lowSodium])

    useEffect(() => {
        filteringCalories()
    }, [lowCalorie])

    useEffect(() => {
        filteringSugar()
    }, [lowSugar])

    useEffect(() => {
        filteringFiber()
    }, [highFiber])

    return (
        <div className='snacks'>
            <h1>SNACKS</h1>
            <form>
                <span>
                    <input
                        id="is_healthy"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(isHealthy, setIsHealthy)}
                        checked={isHealthy}
                    />
                    <label htmlFor="healthy">Healthy Snacks</label>
                </span>
                <span>
                    <input
                        id="low_sodium"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(lowSodium, setLowSodium)}
                        checked={lowSodium}
                    />
                    <label htmlFor="lowSodium">Low Sodium</label>
                </span>
                <span>
                    <input
                        id="low_calorie"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(lowCalorie, setLowCalorie)}
                        checked={lowCalorie}
                    />
                    <label htmlFor="lowCalorie">Low Calorie</label>
                </span>
                <span>
                    <input
                        id="low_sugar"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(lowSugar, setLowSugar)}
                        checked={lowSugar}
                    />
                    <label htmlFor="lowSugar">Low Sugar</label>
                </span>
                <span>
                    <input
                        id="high_fiber"
                        type="checkbox"
                        onChange={() => handleCheckboxChange(highFiber, setHighFiber)}
                        checked={highFiber}
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
