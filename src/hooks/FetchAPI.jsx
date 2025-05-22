// FetchAPI.jsx

export const FetchAPI = async (type) => {
  try {
    const res = await fetch(`https://www.swapi.tech/api/${type}`);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching", type, error);
    return [];
  }
};

export const fetchSingle = async (type, uid) => {
  try {
    const res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
    const data = await res.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching single", type, error);
  }
};
