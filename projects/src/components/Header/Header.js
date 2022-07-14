import React, {lazy} from 'react';
import classes from './Header.module.scss';
import { useLocation, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

// import CatParadise from '../CatParadise/CatParadise';
const CatParadise = lazy(() => import('../CatParadise/CatParadise'))

const Header = () => {
	const location = useLocation();
	return (
		<div className={classes.Header}>
			<div className="container">
				<h1 className="title">30 DAYS OF REACT</h1>
				{location.pathname.includes('day-19') && (
					<Link className={classes.Header__Cats} to="/day-20/cats">
						Day 20 {'>>'}
					</Link>
				)}
				{location.pathname.includes('day-20') && (
					<Link className={classes.Header__Cats} to="/day-19/cats">
						{'<<'} Day 19
					</Link>
				)}
				<NavBar />
				{location.pathname.includes('cats') && <CatParadise />}
			</div>
		</div>
	);
};

export default Header;
