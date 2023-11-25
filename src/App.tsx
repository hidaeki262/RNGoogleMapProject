import React from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './redux/store';

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};



export default App;
