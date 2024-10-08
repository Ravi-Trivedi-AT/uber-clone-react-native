import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation';
import Mapbox from '@rnmapbox/maps';
Mapbox.setAccessToken(
  'sk.eyJ1IjoicmF2aTU1MTEiLCJhIjoiY20yMDJ2ZnQyMGYzZzJrcXNkMWRxdjZneiJ9.0iedf0SSjyjJJp6O7m_NuQ',
);

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigation />;
}

export default App;
