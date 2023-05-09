import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function EditSnack() {

    let { id } = useParams();
    let navigate = useNavigate();

    const [snack, setSnack] = useState(
        {
            name: '',
            image: '',
            calories: '',
            fiber: '',
            sodium: '',
            sugar: '',
            gluten_free: false,
            flavor_profile: '',
            is_healthy: '',
        }
    );

    const updateSnack = (snackToUpdate) => {
        axios.put(`${API}/snacks/${id}`, snackToUpdate)
            .then(() => {
                navigate(`/snacks/${id}`)
            },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c))
    }

    const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
    };

    return (
        <div>

        </div>
    )
}
