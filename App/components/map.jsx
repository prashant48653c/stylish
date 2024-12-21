import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export function Map() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState({city:"Select Your Location"});

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log("User didn't grant location permission");
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    getAddress(userLocation.coords.latitude, userLocation.coords.longitude);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location) {
      console.log('Location updated:', location);
    }
  }, [location]);

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    
    setLocation({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    getAddress(latitude, longitude);
  };
  const getAddress = async (latitude, longitude) => {
    let [reverseGeocodedLocation] = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    setAddress(reverseGeocodedLocation);
     
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>{address.city}</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
        onPress={handleMapPress}
          initialRegion={location}
          region={location}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
        >
          {location && (
            <Marker coordinate={location} title="Your Location" />
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
