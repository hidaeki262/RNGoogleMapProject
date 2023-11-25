import React from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';
import { setSearchResult } from '../redux/actions/searchActions';

// mock data for testing
const malaysiaStates: MalaysiaStatesData[] = [
    { description: 'Johor', name: 'Johor', geometry: { location: { lat: 1.4854, lng: 103.7615 } }, place_id: '1' },
    { description: 'Kedah', name: 'Kedah', geometry: { location: { lat: 6.1254, lng: 100.3674 } }, place_id: '2' },
    { description: 'Kelantan', name: 'Kelantan', geometry: { location: { lat: 6.1254, lng: 102.2385 } }, place_id: '3' },
    { description: 'Kuala Lumpur', name: 'Kuala Lumpur', geometry: { location: { lat: 3.1390, lng: 101.6869 } }, place_id: '4' },
];

export interface MalaysiaStatesData {
    description: string;
    name: string;
    geometry: Geometry
    place_id: string,
}

interface Geometry {
    location: Location
}

interface Location {
    lat: number,
    lng: number
}

const AutocompleteInput = ({ setSearchResult }) => {
    return (
        <GooglePlacesAutocomplete
            placeholder='Search for a place...'
            onPress={(data, details = null) => {
                setSearchResult(details);
            }}
            fetchDetails={false}
            predefinedPlaces={malaysiaStates}
            styles={{
                container: {
                    flex: 0,
                },
                textInput: {
                    height: 38,
                    color: '#5d5d5d',
                    fontSize: 16,
                },
                predefinedPlacesDescription: {
                    color: '#1faadb',
                },
            }}
            keyboardShouldPersistTaps='handled'
        />
    );
};

export default connect(null, { setSearchResult })(AutocompleteInput);