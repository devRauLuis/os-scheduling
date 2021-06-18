import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PriorityScheduling from './components/PriorityScheduling';
import FIFOScheduling from './components/FIFOScheduling';
import QuantumScheduling from './components/QuantumScheduling';
import RoundRobin from './components/RoundRobinScheduling';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='App h-screen flex flex-col justify-center items-center bg-black bg-opacity-10'>
				<div className='w-10/12 bg-tertiary p-4 rounded-2xl shadow-2xl'>
					<Navbar />
					<Switch>
						<Route path='/priority-scheduling' component={PriorityScheduling} />
						<Route path='/FIFO-scheduling' component={FIFOScheduling} />
						<Route path='/quantum-scheduling' component={QuantumScheduling} />
						<Route path='/round-robin-scheduling' component={RoundRobin} />
					</Switch>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
