import React, { useRef, useState, useEffect } from 'react';
import classes from './HexColorGenerator.module.scss';
import Header from '../Header/Header';
import {FaRegCopy} from 'react-icons/fa'
import { LightenDarkenColor } from 'lighten-darken-color'; 

const HexColorGenerator = () => {
	const input = useRef(null);
	const [colors, setColors] = useState([]);
	const hexFigure = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
	];

	const pickHexFigure = () => {
		return hexFigure[Math.floor(Math.random() * hexFigure.length)];
	};

	const hexColor = () => {
		return `#${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}`;
	};

	const handleGenerate = () => {
		const noColors = input.current.value || 27;
		const colorsArr = [];
		for (let i = 0; i < noColors; i++) {
			colorsArr.push(hexColor());
		}
		setColors(colorsArr);
	};

	useEffect(() => {
		handleGenerate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={classes.HexColorGenerator}>
			<Header />
			<div className='container'>
				<div className={classes.HexColorGenerator__Actions}>
					<input ref={input} type='number' />
					<button onClick={handleGenerate}>Generate</button>
				</div>
				<div className={classes.HexColorGenerator__Wrapper}>
					{colors.map((color) => (
						<div className={classes.HexColorGenerator__Cube} key={color} style={{ backgroundColor: color }}>
							{color}
                            <button 
                            onClick={() => {navigator.clipboard.writeText(color)}}
                            style={{backgroundColor: LightenDarkenColor(color, 50) }}
                            ><FaRegCopy /></button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HexColorGenerator;
