import React, { useState, useEffect } from 'react';
import ApiService from '../../service/api.service';

const Main = () => {
	const [countries, setCountries] = useState([]);
	const [country, setCountry] = useState({});

	const randomIndex = () => {
		return Math.floor(Math.random() * 250);
	};

	useEffect(() => {
		ApiService.getCountries().then((data) => {
			setCountries(data.data);
			setCountry(data.data[randomIndex()]);
			console.log(country);
		});
	}, []);

	let selectNewCountry = () => {
		setCountry(countries[randomIndex()]);
	};

	return (
		<div className="Main">
			<div className="main container">
				<div className="shadow">
					<div className="attribute">
						<img src={country.flag} alt="flag" />
						{country.name}
					</div>
					<div>
						<span className="label">Capital: </span>
						{country.capital}
					</div>
					<div>
						<span className="label">Langue: </span>
						{country.languages[0].name}
					</div>
					<div>
						<span className="label">Population: </span>
						{country.population}
					</div>
					<div>
						<span className="label">Currency: </span>
						{country.currencies[0].name}
					</div>
				</div>
				<button className="skill" onClick={selectNewCountry}>
					Select country
				</button>
			</div>
		</div>
	);
};

export default Main;
