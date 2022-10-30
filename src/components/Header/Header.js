// import { Nav } from "./Nav";
import "./Header.scss";
function Header() {
	return (
		<>
			<header className="header">
				<div className="header__container">
					<h1 className="header__name">Sergey Berezhnoy</h1>
					<div className="header__text">
						<p className="header__text-item">
							Frontend Developer 30 years old, Kyiv
						</p>
					</div>
				</div>
				<div className="header__img">
					<img
						src="./images/IMG_11.JPG"
						alt="img logo"
						className="header__img-item"
					/>
				</div>
			</header>
		</>
	);
}
export default Header;
