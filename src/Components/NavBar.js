import { Link } from 'react-router-dom';
import logo from '../assets/logo.PNG'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <h1>
        <img src={logo} alt='logo'/>
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
