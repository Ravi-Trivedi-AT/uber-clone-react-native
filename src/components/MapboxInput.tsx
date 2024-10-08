import {StyleSheet, View} from 'react-native';
// import MapboxPlacesAutocomplete from 'react-native-mapbox-places-autocomplete';

const MapboxInput = () => {
  //   const [origin, setOrigin] = useState<null>();
  //   const [destination, setDestination] = useState<null>();

  return (
    <View style={styles.container}>
      {/* <MapboxPlacesAutocomplete
        id="origin"
              placeholder="Origin"
              
        accessToken={
          'pk.eyJ1IjoicmF2aTU1MTEiLCJhIjoiY20yMDIxN3V4MGRzdTJscHhka2w0bTYzYSJ9.to6pRVpnqc4UJEVxNX9nyQ'
        }
        onPlaceSelect={(data: any) => {
          setOrigin(data);
          setDestination(null);
        }}
        onClearInput={({id}: {id: string}) => {
          id === 'origin' && setOrigin(null);
        }}
        countryId="id"
        // containerStyle={{
        //     margin: 12,
        // }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // zIndex: 999,
    height: 20,
  },
});

export default MapboxInput;
