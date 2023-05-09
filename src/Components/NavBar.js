import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='NavBar'>
      <h1>
        <Link to='/snacks'>Snackalog</Link>
      </h1>
      <button>
        <Link to='/snacks/new'>Add a Snack</Link>
      </button>
    </div>
  )
}
