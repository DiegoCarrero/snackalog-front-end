import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function NewSnack() {
    const [snack, setSnack] = useState({
        name: '',
        image: '',
        calories: '',
        fiber: '',
        sodium: '',
        sugar: '',
        gluten_free: false,
        flavor_profile: '',
        is_healthy: '',
    });

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        setSnack({ ...snack, [e.target.id]: e.target.value });
    };

    const handleCheckboxChange = () => {
        setSnack({ ...snack, gluten_free: !snack.gluten_free });
    };

    const addSnack = (newSnack) => {
        axios.post(`${API}/snacks`, newSnack)
            .then(() => navigate('/snacks'))
            .catch((e) => console.warn(e))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addSnack(snack)
    }

    return (
        <div className='new'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Snack Name:</label>
                <input
                    id="name"
                    value={snack.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Snack"
                    required
                />
                <label htmlFor="url">Image URL:</label>
                <input
                    id="url"
                    type="text"
                    pattern="http[s]*://.+"
                    required
                    value={snack.url}
                    placeholder="http://"
                    onChange={handleTextChange}
                />
                <label htmlFor="calories">Calories:</label>
                <input
                    id="calories"
                    type="text"
                    name="calories"
                    value={snack.calories}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="fiber">Fiber:</label>
                <input
                    id="fiber"
                    type="text"
                    name="fiber"
                    value={snack.fiber}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="sodium">Sodium:</label>
                <input
                    id="sodium"
                    type="text"
                    name="sodium"
                    value={snack.sodium}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="sugar">Sugar:</label>
                <input
                    id="sugar"
                    type="text"
                    name="sugar"
                    value={snack.sugar}
                    placeholder="0"
                    onChange={handleTextChange}
                />
                <label htmlFor="gluten_free">Gluten Free:</label>
                <input
                    id="gluten_free"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={snack.gluten_free}
                />
                <label htmlFor="flavor_profile">Flavor Profile:</label>
                <input
                    id="flavor_profile"
                    type="text"
                    name="flavor_profile"
                    value={snack.flavor_profile}
                    placeholder=""
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" className='submit' />
            </form>
        </div>
    )
}
