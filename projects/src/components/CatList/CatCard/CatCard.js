import classes from './CatCard.module.scss';
const CatCard = ({ cat }) => {
	return (
		<div className={classes.CatCard}>
            <div className={classes.CatCard__ImageWrapper}>
			{!!cat.image && !!cat.image.url && (
				<img src={cat.image.url} alt={cat.name} loading="lazy" />
			)}
            </div>
            <div className={classes.CatCard__Body}>
			<p>{cat.name}</p>
			<p>{cat.origin}</p>
			<p>Temperament: {cat.temperament}</p>
			<p>Weight: {cat.weight.metric}</p>
			<p>Life Span: {cat.weight.life_span}</p>
			<p>Description: {cat.description}</p>
            </div>
		</div>
	);
};

export default CatCard;
