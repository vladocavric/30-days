// import classes from './HeaderC.modules.scss'
import classes from './Header.module.scss';
const Header = ({noCountries, searchCountries}) => {
	return (
		<div className={classes.Header}>
			<h1>World Countries Data</h1>
			<p className={classes.Header__Subtitle}>Currently, we have {noCountries} countries</p>
            <p className={classes.Header__Feedback}>{searchCountries} satisfied the search criteria</p>
		</div>
	);
};

export default Header;
