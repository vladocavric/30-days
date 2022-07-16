import { useState } from 'react';
import classes from './Statistics.module.scss';

const Statistics = ({ tempCountries }) => {
	const [state, setState] = useState('population');
	const sortedCountries = tempCountries.sort((a, b) => {
		return b.population - a.population;
	});
	const slicedCountries = sortedCountries.slice(0, 10);

	const languages = [];
	const langCount = [];
	tempCountries.forEach((country) => {
		if (country.languages) {
			const lang = country.languages.map(({ name }) => name);
			languages.push(...lang);
		}
	});
	const setLang = new Set(languages);
	for (const lang of setLang) {
		let count = 0;
		languages.forEach((language) => {
			if (language === lang) {
				count += 1;
			}
		});
		langCount.push({
			name: lang,
			count,
		});
	}

	const sortLangCount = langCount.sort((a, b) => {
		return b.count - a.count;
	});

	const slicedLangs = sortLangCount.slice(0, 10);

	return (
		<div className={classes.Statistics}>
			<div className={classes.Statistics__Actions}>
				<button
					className='btn btn-yellow btn-l'
					onClick={() => setState('population')}>
					Population
				</button>
				<button
					className='btn btn-yellow btn-l'
					onClick={() => setState('languages')}>
					Languages
				</button>
			</div>
			<h3>
				10 Most{' '}
				{state === 'population'
					? 'populated countries'
					: 'spoken languages'}{' '}
				in the world
			</h3>
			<div className={classes.Statistics__GraphWrap}>
				<div className={classes.Statistics__GraphWrap__Inner}>
					{state === 'population' ? (
						<div className={classes.Statistics__Graph} id='stats'>
							<div className='column'>
								{slicedCountries.map(({ name, population }) => {
									return (
										<span
											key={population}
											className='country-name'>
											{name}
										</span>
									);
								})}
							</div>
							<div className='column population-column'>
								{slicedCountries.map(({ population }) => {
									const widthProc = `${
										(population /
											slicedCountries[0].population) *
										100
									}%`;
									return (
										<div
											key={widthProc}
											className='population'
											style={{ width: widthProc }}></div>
									);
								})}
							</div>
							<div className='column'>
								{slicedCountries.map(
									({ country, population }) => {
										return (
											<span key={population}>
												{population}
											</span>
										);
									}
								)}
							</div>
						</div>
					) : (
						<div className={classes.Statistics__Graph} id='stats'>
							<div className='column'>
								{slicedLangs.map(({ name }) => {
									return (
										<span
											key={name}
											className='country-name'>
											{name}
										</span>
									);
								})}
							</div>
							<div className='column population-column'>
								{slicedLangs.map(({ name, count }) => {
									const widthProc = `${
										(count /
											slicedLangs[0].count) *
										100
									}%`;
									return (
										<div
											key={name}
											className='population'
											style={{ width: widthProc }}></div>
									);
								})}
							</div>
							<div className='column'>
								{slicedLangs.map(
									({ name, count }) => {
										return (
											<span key={name}>
												{count}
											</span>
										);
									}
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Statistics;
