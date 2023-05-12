import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Snack() {

  const [snack, setSnack] = useState({});
  const [healthy, setHealthy] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const copy = {...snack}

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data)
        isHealthy();
      })
      .catch((e) => console.warn('catch', e)) 
      console.log(copy)
  }, [])

  function isHealthy() {
    if ((copy.fiber * 100)/copy.calories >= 2 && (copy.sodium * 100)/copy.calories <= 100) {
        setHealthy(true);
    } else {
      setHealthy(false)
    }
  }

  // useEffect(() => {
  //   isHealthy();
  // }, [healthy])

  const deleteSnack = () => {
    axios.delete(`${API}/snacks/${id}`)
      .then(() => navigate('/snacks'), 
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c))
  }

  return (    
    <div className='snack-details'>

      <h1>{snack.name} {healthy ? "❤️" : "♡"}</h1>
      <img src={snack.image} alt={snack.name} />
      <span><strong>{snack.flavor_profile}</strong></span>
      <span><strong>Calories: </strong>{snack.calories} cals</span>
      <span><strong>Fiber: </strong>{snack.fiber} g</span>
      <span><strong>Sodium: </strong>{snack.sodium} mg</span>
      <span><strong>Sugar: </strong>{snack.sugar} g</span>
      <span><strong>{snack.gluten_free ? "Gluten Free" : null}</strong></span>

      <button>
        <Link to={`/snacks/${id}/edit`} >Edit Snack</Link>
      </button>

      <button onClick={deleteSnack}>Delete Snack</button>

    </div>
  )
}
