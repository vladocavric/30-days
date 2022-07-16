import React, { useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
	const [dark, setDark] = useState(false);
	const user = {
		firstName: 'Vlado',
		lastName: 'Cavric',
		position: 'FE Developer',
		location: 'Serbia',
		join: '18. Jun 2022',
		skills: [
			'HTML',
			'CSS',
			'SCSS',
			'SASS',
			'JavaScript',
			'React',
			'Angular',
			'Twig',
			'EJS',
			'NodeJS',
			'SQL',
			'MongoDB',
			'Express',
			'Drupal',
		],
	};

	// let dark = true
	const changeTheme = () => {
		setDark(!dark);
		console.log('nesto', dark);
	};
	return (
		<div className={`App ${dark ? 'dark' : ''}`}>
			<Header user={user} />
			<Main skills={user.skills} changeTheme={changeTheme} />
			<Footer />
		</div>
	);
}

export default App;
