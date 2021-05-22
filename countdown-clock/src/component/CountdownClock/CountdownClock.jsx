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

	console.log(calculateTimeLeft());

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	return (
		<div className="countdown-clock-container">
			{/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
			{calculateTimeLeft !== 0 ? (
				<div className="countdown-clock">
					<div className="countdown-clock-placement">
						<p id="timer-days" class="countdown-lock-number">
							{timeLeft.days}
						</p>
						<p class="countdown-clock-label">Day</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" class="countdown-lock-number">
							{timeLeft.hours}
						</p>
						<p class="countdown-clock-label">HR</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" class="countdown-lock-number">
							{timeLeft.minutes}
						</p>
						<p class="countdown-clock-label">MIN</p>
					</div>
					<div className="countdown-clock-placement">
						<p id="timer-hours" class="countdown-lock-number">
							{timeLeft.seconds}
						</p>
						<p class="countdown-clock-label">SEC</p>
					</div>
				</div>
			) : (
				<p>Launched</p>
			)}
		</div>
	);
};

export default CountdownClock;
