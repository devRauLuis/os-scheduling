import './App.css';
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

function App() {
	return (
		<Router>
			<div className='App h-screen flex flex-col justify-center items-center bg-black bg-opacity-10'>
				<div className='w-[80%] max-w-6xl h-full max-h-[90%] bg-tertiary rounded-2xl shadow-2xl flex flex-col '>
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
					<div className='px-4 pb-3.5 justify-self-end'>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;

