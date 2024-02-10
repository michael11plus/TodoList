import './todolist.css';
import { useState } from 'react';
import  Logo  from '../assets/logo-no-background.png'

const Navbar = () => {

    const [ name, setName ] = useState('');

    const handleTextDisplay = (event) => {
        setName(event.target.value);
    }

    return(
        <div className='navbar'>
            <img src={Logo} className='navbar-logo' />
            <div className='navbar-description'>
                welcome to your own to-do list, {name}
            </div>
            <input type='text' value={name} className='navbar-input' onChange={handleTextDisplay}/>
        </div>
    )

}

export default Navbar;