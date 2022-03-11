import React from 'react';
import { NavigationHeader, NavigationContainer, NavItems} from '../../styles/containers/Navigation.Styles';
import { navigationItem } from '../../constants/navigationData';
import NavigationItems from '../../components/Navigation/NavigationItems';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import { size, maxView, minView } from '../../styles/globalstyles/mediaQueries.styles'; 

const Navigation = () => {
  return (
    <>
      <NavigationHeader>
        <NavigationContainer>
          {navigationItem.map((item) => (
            <NavigationItems data={item} key={item.id} />
          ))}
        </NavigationContainer>
      </NavigationHeader>
    </>
  )
}

export default Navigation