import React, { useState } from 'react';
import '../styles/ReadMore.styles.scss';

const ReadMore = ({ data }) => {
	[data] = data;

	const text = data?.data?.description;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text">
			{isReadMore ? text.slice(0, 150) : text}
			<span onClick={toggleReadMore} className="read-or-hide">
				{isReadMore ? '...read more' : ' show less'}
			</span>
		</p>
	);
};

export default ReadMore;
