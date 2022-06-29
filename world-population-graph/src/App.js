import './App.css';
import { tenHighestPopulation } from './tenHighestPopulation';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>30 days of react</h1>
				<h3>Hexadecimal Colors</h3>
			</header>
			<div className="container">
				<div className="column">
					{tenHighestPopulation.map(({ country, population }) => {
						return <span className="country-name">{country}</span>;
					})}
				</div>
				<div className="column population-column">
					{tenHighestPopulation.map(({ country, population }) => {
            const widthProc = `${population / tenHighestPopulation[0].population * 100}%`;
						return <div className="population" style={{width: widthProc}}>
            <div style={{backgroundColor: 'red'}} width="48px" height="48px"> </div>
            </div>;
					})}
				</div>
				<div className="column">
					{tenHighestPopulation.map(({ country, population }) => {
						return <span>{population}</span>;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
