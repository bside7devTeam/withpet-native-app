import React, {useRef} from 'react';
import {throttle} from 'lodash';
import Navi from '@navigation/index';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@helper/RootNavigation';

const App: React.FC = () => {
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={throttle(async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        const {title} = navigationRef.current.getCurrentOptions();
        if (previousRouteName !== currentRouteName) {
          const screen_name = title ? title : currentRouteName;
          console.log(screen_name, 'screen_name');
        }

        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }, 100)}>
      <Navi />
    </NavigationContainer>
  );
};

export default App;
