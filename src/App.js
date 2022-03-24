import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
		<Router>
			<Header/>
				<Switch>
					<Route exact path="/Portfolio/" component={About}></Route>
					<Route exact path="/Portfolio/projects" component={Projects}></Route>
					<Route exact path="/Portfolio/contact" component={Contact}></Route>
					<Route exact path="/Portfolio/resume" component={Resume}></Route>
					{/* Catch any other routes and redirect back to about */}
					<Route component={About}/>
				</Switch>
			<Footer/>
		</Router>
  );
}

export default App;
