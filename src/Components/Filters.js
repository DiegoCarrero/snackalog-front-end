import { useEffect, useState } from "react";

export default function Filters({ setSnacks, allSnacks }) {

    const [isHealthy, setIsHealthy] = useState(false);
    const [lowSodium, setLowSodium] = useState(false);
    const [lowCalorie, setLowCalorie] = useState(false);
    const [lowSugar, setLowSugar] = useState(false);
    const [highFiber, setHighFiber] = useState(false);

    const handleCheckboxChange = (item, setItem) => {
        setItem(!item);
    }

    useEffect(() => {
        let filteredSnacks = [...allSnacks];

        if (isHealthy) {
            filteredSnacks = filteredSnacks.filter((snack) => ((snack.fiber * 100) / snack.calories >= 2 && (snack.sodium * 100) / snack.calories <= 100));
        }

        if (lowSodium) {
            filteredSnacks = filteredSnacks.filter((snack) => ((snack.sodium * 100) / snack.calories <= 20))
        }

        if (lowCalorie) {
            filteredSnacks = filteredSnacks.filter((snack) => snack.calories <= 150)
        }

        if (lowSugar) {
            filteredSnacks = filteredSnacks.filter((snack) => ((snack.sugar * 100) / snack.calories <= 5));
        }

        if (highFiber) {
            filteredSnacks = filteredSnacks.filter((snack) => ((snack.fiber * 100) / snack.calories >= 5));
        }

        setSnacks(filteredSnacks);
    }, [isHealthy, lowSodium, lowCalorie, lowSugar, highFiber])

    return (
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
    )
}
