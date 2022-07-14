import classes from './Footer.module.scss';
import { FaArrowCircleUp } from 'react-icons/fa';

const Footer = () => {
	const copyYear = new Date().getFullYear();
	return (
		<div className={classes.Footer}>
			<div>Copyright© {copyYear} 30 Days Of React</div>

			<div>
				Join{' '} 
				<a
					href="https://github.com/vladocavric/30-Days-Of-React"
					target="_blank"
					rel="noreferrer"
				>
					30 Days of React challenge
				</a>
			</div>

			<div>Designed and Built by Vlado</div>
			<a className='scrollUp' href="#root">
				<FaArrowCircleUp />
			</a>
		</div>
		// <div className={[classes.Footer__text, 'blue'].join(' ')}>nesto novo</div>
	);
};

export default Footer;
