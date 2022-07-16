import classes from './Country.module.scss';
const Country = ({ country }) => {
    const languages = country.languages.map((couLang, i) => {
        if(country.languages.length === i+1) {
            return couLang.name
        } else {
            return couLang.name + ', ' 
        }
        
    })
	return (
		<div className={classes.Country}>
			{country.flags && country.flags.svg ? (
				<img src={country.flags.svg} alt={country.name} />
			) : (
				<img src={country.flags.svg} alt={country.name} />
			)}
			<h3 className={classes.Country__Name}>{country.name}</h3>
            <div className={classes.Country__Text}>
            <p><span>Capital: </span>{country.capital}</p>
            <p><span>Languages: </span>{languages}</p>
            <p><span>Population: </span>{(country.population).toLocaleString('de-DE', { maximumFractionDigits: 2 })}</p>
            <p><span>Currency: </span>{country.currencies ?  country.currencies[0].name : ''}</p>
            </div>
		</div>
	);
};

export default Country;
