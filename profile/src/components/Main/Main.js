import me from '../../images/me.JPG';

const Main = ({ skills, changeTheme }) => {
	const skillsCard = (
		<div className="skills">
			{skills.map((skill) => (
				<span key={skill} className="skill">
					{skill}
				</span>
			))}
		</div>
	);

	return (
		<div className="Main">
			<div className="main container">
				<div>Prerequisite to get started react.js</div>
				<div>HTML</div>
				<div>CSS</div>
				<div>JavaScript</div>
				<div className="img-wrap">
					<img src={me} alt="me" />
				</div>
				{skillsCard}
				<button onClick={changeTheme}>Change Background</button>
			</div>
		</div>
	);
};

export default Main;
