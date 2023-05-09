import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='NavBar'>
      <h1>
        <Link to='/'>Snackalog</Link>
      </h1>
      <h2>
        <Link to='/snacks'>All Snacks</Link>
      </h2>
      <button>
        <Link to='/snacks/new'>Add a Snack</Link>
      </button>
    </div>
  )
}
