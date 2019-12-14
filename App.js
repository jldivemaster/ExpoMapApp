import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Map from './app/components/Map';

const region = {
  latitude: 37.321996988,
  longitude: -122.0325472123455,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

export default class App extends React.Component {
  state = {
    region: null,
    coffeeShops: []
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Map
          region={region}
          places={this.state.coffeeShops}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
