import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Snack() {

  const [snack, setSnack] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data)
      })
      .catch((e) => console.warn('catch', e))
  }, [])

  function isHealthy() {
    if ((snack.fiber * 100) / snack.calories >= 2 && (snack.sodium * 100) / snack.calories <= 100) {
      return "❤️"
    } else {
      return "♡"
    }
  }

  const deleteSnack = () => {
    axios.delete(`${API}/snacks/${id}`)
      .then(() => navigate('/snacks'),
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c))
  }

  return (
    <div className='snack-details'>
      <h1>{snack.name} {isHealthy()} </h1>
      <img src={snack.image} alt={snack.name} />
      <span><strong>{snack.flavor_profile}</strong></span>
      <span><strong>Calories: </strong>{snack.calories} cals</span>
      <span><strong>Fiber: </strong>{snack.fiber} g</span>
      <span><strong>Sodium: </strong>{snack.sodium} mg</span>
      <span><strong>Sugar: </strong>{snack.sugar} g</span>
      <span><strong>{snack.gluten_free ? "Gluten Free" : null}</strong></span>

      <div className='detail-buttons'>
        <button>
          <Link to={`/snacks/${id}/edit`} >Edit Snack</Link>
        </button>
        <br />
        <br />
        <button onClick={deleteSnack}>Delete Snack</button>
      </div>
    </div>
  )
}
