import React, { useState, useEffect } from 'react';

import './App.scss';
import Loader from './Loader/Loader';

function App() {
	const [loading, setLoading] = useState(true);
	const [method, setMethod] = useState('time');
	const [color, setColor] = useState('#000');

	useEffect(() => {
		if (method === 'time') {
			const hour = new Date().getHours();
			switch (hour) {
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
					setColor('yellow');
					break;
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
					setColor('green');
					break;
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
					setColor('red');
					break;
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					setColor('orange');
					break;
				default:
					console.log('what');
			}
		} else {
			const month = new Date().getMonth();
			switch (month) {
				case 3:
				case 4:
				case 5:
					setColor('#00ff7c');
					break;
				case 6:
				case 7:
				case 8:
					setColor('#ffe774');
					break;
				case 9:
				case 10:
				case 11:
					setColor('#67423b');
					break;
				case 12:
				case 1:
				case 2:
					setColor('#234272');
					break;
				default:
					console.log('what');
			}
		}
	}, [method]);

	setTimeout(() => {
		setLoading(false);
	}, 1000);


	const changeMethod = (useThisMethod) => {
		setMethod(useThisMethod);
	};

	return (
		<div className="App" style={{ backgroundColor: color }}>
			{loading && <Loader />}
			{!loading && (
				<div className="actions">
					<button onClick={() => changeMethod('season')}>
						Change color based on Season
					</button>
					<button onClick={() => changeMethod('time')}>
						Change color based of the Time
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
