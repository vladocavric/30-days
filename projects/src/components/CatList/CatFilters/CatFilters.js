
const CatFilters = ({ cats, handleCatFilter }) => {
	const catsByCountry = [];
	const countries = cats.map(({ origin }) => origin);
	const setCountries = new Set(countries);
	for (let country of setCountries) {
		const countryList = cats.filter(({ origin }) => origin === country);
		catsByCountry.push(countryList);
	}
	const sortedCatsByCountry = [...catsByCountry].sort((a, b) => {
		return b.length - a.length;
	});

	return (
		<div>
			{sortedCatsByCountry.map((c) => {
				return (
					<button
						key={c[0].origin}
						onClick={(e) => handleCatFilter(c[0].origin)}
					>
						{c[0].origin}({c.length})
					</button>
				);
			})}
			<button onClick={(e) => handleCatFilter('all')}>All</button>
		</div>
	);
};

export default CatFilters;
