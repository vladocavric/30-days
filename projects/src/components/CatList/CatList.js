import { useEffect, useReducer, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';
import Header from '../Header/Header';
import CatCard from './CatCard/CatCard';
import CatFilters from './CatFilters/CatFilters';
import catsReducer from '../../store/reducers/cats';
import Loader from '../Loader/Loader';
import classes from './CatList.module.scss';
import ApiService from '../../services/api.servece';

const CatList = () => {
	const { pathname } = useLocation();
	const [cats, catDispatch] = useReducer(catsReducer, []);
	const [filteredCats, setFilteredCats] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// const fetchCats = async () => {
		// 	setLoading(true);
		// 	const url = 'https://api.thecatapi.com/v1/breeds';
		// 	try {
		// 		const response = await axios.get(url);
		// 		const cats = await response.data;
		// 		if (cats) {
		// 			catDispatch({ type: 'POPULATE_CATS', cats });
		// 			setFilteredCats(cats)
		//             setLoading(false)
		//             // console.log(cats)
		// 		}

		// 	} catch (err) {
		// 		console.log(err);
		// 	}
		// };
		// fetchCats();

		(async function () {
			const cats = await ApiService.getCats();
			catDispatch({ type: 'POPULATE_CATS', cats });
			setFilteredCats(cats);
			setLoading(false);
		})();
	}, []);

	const handleCatFilter = (org) => {
		if (org === 'all') {
			setFilteredCats(cats);
		} else {
			const countryList = cats.filter(({ origin }) => origin === org);
			setFilteredCats(countryList);
		}
	};

	return (
		<div className={[classes.CatList, loading ? 'loading' : ''].join(' ')}>
			{loading && <Loader />}
			{!loading && (
				<>
					<Header />
					{pathname.includes('day-20') && (
						<CatFilters
							cats={cats}
							handleCatFilter={handleCatFilter}
						/>
					)}
					{filteredCats.map((cat) => (
						<CatCard key={cat.id} cat={cat} />
					))}
				</>
			)}
		</div>
	);
};

export default CatList;
