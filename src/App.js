import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/Body/AboutMe";
import Skills from "./components/Body/Skills";
import Footer from "./components/Footer/Footer";
import TrafficLight from "./components/TrafficLight/TrafficLightClass";
import Fcomponent from "./components/Body/Fcomponent";
import Ccomponent from "./components/Body/Ccomponent";
import FuncStarRating from "./components/StarRating/FuncStarRating";
import ClassStarRating from "./components/StarRating/ClassStarRating";
import Stars from "./components/StarRating/Star";

function App() {
	return (
		<div className="container">
			<Header />
			<AboutMe />
			<Skills />
			<Footer />
			<TrafficLight />
			<Fcomponent name="serg" />
			<Ccomponent />
			<FuncStarRating hover="1" rating="1" />
			<ClassStarRating hover="1" count="1" />
		</div>
	);
}

export default App;
