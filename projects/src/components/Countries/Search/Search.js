import classes from './Search.module.scss';
import { FaChartBar } from 'react-icons/fa';

const Search = ({ handleSearch }) => {
	return (
		<div className={classes.Search}>
			<input
				className={classes.Search__Input}
				type='text'
				placeholder='Search countries by name, city and languages'
				onChange={e => handleSearch(e)}
			/>
			<div>
				<a className={classes.Search__Chart} href='#stats'>
					<FaChartBar />
				</a>
			</div>
		</div>
	);
};

export default Search;
