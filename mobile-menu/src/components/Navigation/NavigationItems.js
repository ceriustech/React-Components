import React from 'react';
import {
	NavigationItem,
	NavDot,
	ListLink,
} from '../../styles/components/Navigationitem.Styles';
import { size } from '../../styles/globalstyles/mediaQueries.styles';

const NavigationItems = ({ data }) => {
	return (
		<>
			<NavigationItem>
				<NavDot />
				<ListLink to={data.path}>{data.name}</ListLink>
			</NavigationItem>
		</>
	);
};

export default NavigationItems;
