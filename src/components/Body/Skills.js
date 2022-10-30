import "./Skills.scss";
function Skills() {
	return (
		<div className="skills">
			<h2 className="skills__name">Skils</h2>
			<p className="skills__text">I work in such programs as</p>
			<div className="card__conteiner">
				<div className="card__item">
					<img
						src="./images/html5-01_icon-icons.com_50875.png"
						alt="html logo"
						className="card__item-img"
					/>
					<p className="card__item-text">HTML 5</p>
				</div>
				<div className="card__item">
					<img
						src="./images/css3-01_icon-icons.com_50918.png"
						alt="html logo"
						className="card__item-img"
					/>
					<p className="card__item-text">CSS</p>
				</div>
				<div className="card__item">
					<img
						src="./images/prog-js02_icon-icons.com_50788.png"
						alt="html logo"
						className="card__item-img"
					/>
					<p className="card__item-text">Java Script</p>
				</div>
				<div className="card__item">
					<img
						src="./images/react_logo_icon_144942.png"
						alt="html logo"
						className="card__item-img"
					/>
					<p className="card__item-text">React</p>
				</div>
			</div>
		</div>
	);
}
export default Skills;
