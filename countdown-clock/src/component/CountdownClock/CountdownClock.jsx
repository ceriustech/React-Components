import React, { useEffect, useState } from 'react';

import '../../Styles/CountdownClock/CountdownClock.scss';

const CountdownClock = () => {
	const calculateTimeLeft = () => {
		const launchDate = new Date(
			'June 15 2021 23:59:59 GMT-0500 (CST)'
		).getTime();

		const now = new Date().getTime();

		const distance = launchDate - now;

		let timeLeft = {};

		if (distance > 0) {
			timeLeft = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((distance / 1000 / 60) % 60),
				seconds: Math.floor((distance / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return;
		}

		timerComponents.push(<span>{timeLeft[interval]} </span>);
	});

	return (
		<div className="countdown-clock-container">
			{timerComponents.length ? timerComponents : <span>Time's up!</span>}
		</div>
	);
};

export default CountdownClock;
