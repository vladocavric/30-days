import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header/Header';
import Search from './Search/Search';
import Statistics from './Statistics/Statistics';
import Country from './Country/Country';
import Loader from '../Loader/Loader';
import classes from './Countries.module.scss';

const Countries = () => {
	const [loading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [tempCountries, setTempCounties] = useState(countries);

	useEffect(() => {
		const fetchCountries = async () => {
			setLoading(true);
			const url = 'https://restcountries.com/v2/all';
			try {
				const response = await axios.get(url);
				const countries = await response.data;
				if (countries) {
					setCountries(countries);
					setTempCounties(countries);
					setLoading(false);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchCountries();
	}, []);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		if (term === '') {
			setTempCounties(countries);
		} else {
			const countryList = countries.filter((country) => {
				const searchCountryByCapital = country.capital ? country.capital.toLowerCase().includes(term) : null
				const searchCountryByName = country.name.toLowerCase().includes(term)
				const searchCountryByLang = country.languages ? country.languages.find(lang => lang['name'].toLowerCase().includes(term))  : null
				return (searchCountryByCapital || searchCountryByLang || searchCountryByName)
			});
			setTempCounties(countryList);
		}
	};

	return (
		<div className={classes.Countries}>
			<Header
				noCountries={countries.length}
				searchCountries={tempCountries.length}
			/>
			<Search handleSearch={handleSearch} />
			{loading && <Loader />}
			{!loading && (
				<div className={classes.Countries__Wrapper}>
					{tempCountries.map((country) => (
						<Country key={country.name} country={country} />
					))}
				</div>
			)}
			<Statistics tempCountries={tempCountries}/>
		</div>
	);
};

export default Countries;
