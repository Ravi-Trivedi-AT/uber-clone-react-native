import {Camera, MapView} from '@rnmapbox/maps';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Map = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <Camera zoomLevel={8} centerCoordinate={[-73.935242, 40.73061]} />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: '100%',
  },
  map: {
    flex: 1,
  },
});
export default Map;
