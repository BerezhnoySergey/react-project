import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/Body/AboutMe";
import Skills from "./components/Body/Skills";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="container">
			<Header />
			<AboutMe />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
