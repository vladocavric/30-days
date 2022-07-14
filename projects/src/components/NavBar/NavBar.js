import {NavLink} from 'react-router-dom';
import classes from './NavBar.module.scss';
const NavBar = () => {
    return (
        <div className={classes.NavBar}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/dummy-data-generator'>Dummy Data</NavLink>
        </div>
    )
}

export default NavBar