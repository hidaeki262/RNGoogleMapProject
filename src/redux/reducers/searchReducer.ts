const initialState = {
    searchResults: [],
};

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SEARCH_RESULT':
            return {
                ...state,
                searchResults: [...state.searchResults, action.payload],
            };
        default:
            return state;
    }
};

export default searchReducer;
