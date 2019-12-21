import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './app/components/Map';
import { Location, Permissions, MapView } from 'expo'

// const deltas = {
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// };



export default class App extends React.Component {
  state = {
    region: {
      latitude: 37.321996988,
      longitude: -122.0325472123455,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    coffeeShops: ["one", "two"]
  }


  // componentWillMount() {
  //   this.getLocationAsync();
  // };
  //
  // getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     this.setState({
  //       errorMessage: 'Permission to access location was denied'
  //     });
  //   }
  //
  //   let location = await Location.getCurrentPositionAsync({});
  //   const region = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     ...deltas
  //   };
  //   await this.setState({ region });
  // }

  render() {
    return (
        <View>
        <MapView
        initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
        </View>
    )};
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })
