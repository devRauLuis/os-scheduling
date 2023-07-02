import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import PriorityScheduling from './components/PriorityScheduling';
import FIFOScheduling from './components/FIFOScheduling';
import QuantumScheduling from './components/QuantumScheduling';
import RoundRobin from './components/RoundRobinScheduling';
import Footer from './components/Footer';
import 'react-tooltip/dist/react-tooltip.css';
import './App.css';

function App() {
	return (
		<Router>
			<div className='h-screen flex flex-col justify-center'>
				<div className='h-full w-full lg:h-4/5 bg-tertiary flex flex-col justify-between lg:max-w-4xl xl:max-w-6xl mx-auto px-4 pt-6 lg:rounded-lg'>
					<Navbar />
					<div className='flex-grow'>
						<Routes>
							<Route index element={<Navigate to='/priority-scheduling' />} />
							<Route
								index
								path='/priority-scheduling'
								element={<PriorityScheduling />}
							/>
							<Route path='/FIFO-scheduling' element={<FIFOScheduling />} />
							<Route
								path='/quantum-scheduling'
								element={<QuantumScheduling />}
							/>
							<Route path='/round-robin-scheduling' element={<RoundRobin />} />
						</Routes>
					</div>
					<div className='mt-4 pb-4 justify-self-end'>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;

