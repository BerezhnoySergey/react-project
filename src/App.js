import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/Body/AboutMe";
import Skills from "./components/Body/Skills";
import Footer from "./components/Footer/Footer";
import TrafficLight from "./components/TrafficLight/TrafficLightClass";

function App() {
	return (
		<div className="container">
			<Header />
			<AboutMe />
			<Skills />
			<Footer />
			<TrafficLight />
		</div>
	);
}

export default App;
