import { useState } from 'react';
import { Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function Snack() {

  const [snack, setSnack] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data))
      .catch((e) => console.warn('catch', e)) 
  }, [id, API])

  return (
    <div>

      {snack.is_healthy ? (
        <span>(is healthy icon)</span>
      ) : null }
      {snack.name}
      {snack.image}

      <button>
        <Link to={`/snacks/${id}/edit`} >Edit Snack</Link>
      </button>

      <button onClick={handleDelete}>Delete Snack</button>

    </div>
  )
}
