export const initialStore = () => ({
    characters: [],
    planets: [],
    vehicles: [],
    favorites: [],
});

const storeReducer = (state, action) => {
    switch (action.type) {
        case "SET_CHARACTERS":
            return { ...state, characters: action.payload };
        case "SET_PLANETS":
            return { ...state, planets: action.payload };
        case "SET_VEHICLES":
            return { ...state, vehicles: action.payload };
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.includes(action.payload)
                    ? state.favorites.filter(fav => fav !== action.payload)
                    : [...state.favorites, action.payload]
            };
        default:
            return state;
    }
};

export default storeReducer;
