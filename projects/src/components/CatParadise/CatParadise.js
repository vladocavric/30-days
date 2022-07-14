import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import classes from './CatParadise.module.scss';
import cat from '../../assets/favicon.ico';
import catsReducer from '../../store/reducers/cats';

import Loader from '../Loader/Loader';

function CatParadise() {
	const [cats, catDispatch] = useReducer(catsReducer, [])
	// const [cats, setCats] = useState([]);
	const [avgWeight, setAvgWeight] = useState(0);
	const [avgLife, setAvgLife] = useState(0);
	const [loading, setLoading] = useState(true);

	const average = (arr) => {
		return arr.reduce((a, b) => a + b) / arr.length;
	};

	useEffect(() => {
		const fetchCats = async () => {
			setLoading(true);
			let catWeights = [];
			let catLife = [];
			const url = 'https://api.thecatapi.com/v1/breeds';
			try {
				const response = await axios.get(url);
				const cats = await response.data;
				if (cats) {
					catDispatch({type: 'POPULATE_CATS', cats})
				}
				// setCats(cats);
				for (const cat of cats) {
					catWeights.push(
						(parseFloat(cat.weight.metric[0]) +
							parseFloat(cat.weight.metric.length)) /
							2
					);
					catLife.push(
						...cat.life_span.split('-').map((x) => parseFloat(x))
					);
				}
				setAvgWeight(parseFloat(average(catWeights)).toFixed(2));
				setAvgLife(parseFloat(average(catLife)).toFixed(2));
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchCats();
	}, []);

	return (
		<div className="App">
			{loading && <Loader />}
			{!loading && (
				<div className={classes.CatParadise}>
					<img src={cat} alt="cat" />
					<h2>Cats Paradise</h2>
					<div>There are {cats.length} cat breeds</div>
					<div>
						On average cat can weight about <span>{avgWeight}</span>{' '}
						Kg and live <span>{avgLife}</span> years.
					</div>
				</div>
			)}
		</div>
	);
}

export default CatParadise;
