import React, { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import AutocompleteInput from './components/AutocompleteInput';
import Map from './components/Map';
import store from './redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Text style={styles.text}>Map directory</Text>
        <AutocompleteInput />
        <Map />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
  }
});

export default App;
