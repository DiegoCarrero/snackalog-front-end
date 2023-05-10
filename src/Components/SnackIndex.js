import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SnackIndex({ snack }) {
    const [healthy, setHealthy] = useState(false)
    const [lowSugar, setLowSugar] = useState(false);
    const [highFiber, setHighFiber] = useState(false);

    let cals = snack.calories;
    let fiber = snack.fiber;
    let sugar = snack.sugar;
    let sodium =snack.sodium;

    function isHealthy() {
        if ((fiber * 100)/cals >= 2 && (sodium * 100)/cals <= 100) {
            setHealthy(true);
        }
    }

    function isLowSugar() {
        (sugar * 100)/ cals <= 5 ? setLowSugar(true) : setLowSugar(false);
    }

    function isHighFiber() {
        (fiber * 100)/ cals >= 5 ? setLowSugar(true) : setLowSugar(false);
    }

    useEffect(() => {
        isHealthy()
    }, [])


    return (
        <div>
            <h3>{snack.name} {healthy ? "❤️" : "♡"}</h3>
            <Link to={`/snacks/${snack.id}`}><img src={snack.image} alt={snack.name} /></Link>
            <span><strong>{snack.flavor_profile}</strong></span>
            <span><strong>Calories: </strong>{snack.calories}</span>
            <span><strong>Fiber: </strong>{snack.fiber}g</span>
            <span><strong>Sodium: </strong>{snack.sodium}mg</span>
            <span><strong>Sugar: </strong>{snack.sugar}g</span>
            <span><strong>{snack.gluten_free ? "Gluten Free" : null}</strong></span>
        </div>
    )
}
