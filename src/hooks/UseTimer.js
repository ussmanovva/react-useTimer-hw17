import { useState, useEffect, useRef } from "react";

export function useTimer(initialMinutes) {
	const initialSeconds = initialMinutes * 60;

	const [time, setTime] = useState(initialSeconds);
	const [isActive, setIsActive] = useState(false);
	const timerRef = useRef(null);

	useEffect(() => {
		if (isActive && time > 0) {
			timerRef.current = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else if (time === 0) {
			clearInterval(timerRef.current);
		}
		return () => clearInterval(timerRef.current);
	}, [isActive, time]);

	const start = () => setIsActive(true);

	const stop = () => {
		clearInterval(timerRef.current);
		setIsActive(false);
	};

	const restart = () => {
		clearInterval(timerRef.current);
		setTime(initialSeconds);
		setIsActive(true);
	};

	return { time, start, stop, restart };
}
