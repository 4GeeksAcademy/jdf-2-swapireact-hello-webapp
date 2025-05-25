
export const fetchCharacters = async () => {
    try {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();
        return data.results; // contiene un array de personajes con { name, uid, url }
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
};


export const fetchPlanets = async () => {
    try {
        const res = await fetch("https://www.swapi.tech/api/planets");
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching planets:", error);
        return [];
    }
};


export const fetchVehicles = async () => {
    try {
        const res = await fetch("https://www.swapi.tech/api/vehicles");
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching vehicles:", error);
        return [];
    }
};
