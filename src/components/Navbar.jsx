import { Link } from 'react-router'
import logo from '../../assets/img/logo.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-center'>
        <Link to='/' className='hover:opacity-90 transition-opacity duration-75 ease-in'>
            <img src={logo} alt="ffozilbek.blog logosi" width={226} height={39}/>
        </Link>
    </nav>
  )
}

export default Navbar