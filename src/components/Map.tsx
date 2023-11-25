import React, { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { MalaysiaStatesData } from './AutocompleteInput';

interface MapProps {
    searchResults: MalaysiaStatesData[];
}

const Map = ({ searchResults }: MapProps) => {
    const defaultRegionData = {
        latitude: 4.2105,
        longitude: 101.9758,
        latitudeDelta: 4,
        longitudeDelta: 4,
    }

    return (
        <MapView
            style={styles.flexContainer}
            initialRegion={defaultRegionData}
        >
            {searchResults.map((result, index: number) => (
                <Marker
                    key={index}
                    coordinate={{
                        latitude: result.geometry.location.lat,
                        longitude: result.geometry.location.lng,
                    }}
                    title={result.name}
                />
            ))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    }
})

const mapStateToProps = (state: any) => ({
    searchResults: state.searchResults,
});

export default connect(mapStateToProps)(Map);
