import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import classes from './Home.module.scss'

const Home = () => {
	return (
		<div>
			<Header />
			<div className={classes.Home}>
				<Link to='/about'>About </Link>
				<Link to='/dummy-data-generator'>Dummy Data </Link>
				<Link to='/day-19/cats'>Cats 19 </Link>
				<Link to='/day-20/cats'>Cats 20 </Link>
				<Link to='/day-23/countries-data'>Countries </Link>
				<Link to='/day-27/hex'>Hex Color Generator </Link>
			</div>
		</div>
	);
};

export default Home;
