import { useState } from "react";
import { useTimer } from "./hooks/UseTimer.js";


function App() {
	const [minutes, setMinutes] = useState(1);
	const { time, start, stop, restart } = useTimer(minutes);

 	const handleChange = (e) => {
		setMinutes(Number(e.target.value));
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg">
				<input
					type="number"
					value={minutes}
					onChange={handleChange}
					min="1"
					placeholder="Enter minutes"
					className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<div className="text-2xl font-bold text-gray-800 mb-4">
					Time Remaining: {time} seconds
				</div>
				<div className="flex justify-evenly space-x-4">
					<button
						onClick={start}
						className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
						Start
					</button>
					<button
						onClick={stop}
						className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
						Stop
					</button>
					<button
						onClick={restart}
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
						Restart
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
