import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


const getImageUrl = (type, name) => {
    const baseUrl = "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img";
    const formatName = name.toLowerCase().replace(/\s/g, "-").replace(/[^a-z0-9\-]/g, "");

    switch (type) {
        case "people":
            return `${baseUrl}/characters/${formatName}.jpg`;
        case "planets":
            return `${baseUrl}/planets/${formatName}.jpg`;
        case "vehicles":
            return `${baseUrl}/vehicles/${formatName}.jpg`;
    
    }
};


export const Carrousel = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleFavorite = (type, uid) => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: `${type}/${uid}` });
    };

    const renderCards = (items, type) => {
        if (!Array.isArray(items)) return null;

        return items.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
                <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img
                        src={getImageUrl(type, item.name)}
                        className="card-img-top"
                        alt={item.name}
                       
                    />

                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p>Lorem ipsum wingardium leviosa morituri salutant est Lorem ipsum wingardium leviosa morituri salutant est </p>
                        <div className="d-flex justify-content-between">
                            <Link to={`/single/${type}/${item.uid}`} className="btn btn-warning">
                                Details
                            </Link>
                            <button
                                className="btn btn-warning"
                                onClick={() => handleFavorite(type, item.uid)}
                            >
                                ❤️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };


    return (
        <div className="container">
            {store.characters && store.characters.length > 0 && (
                <>
                    <h2>Characters</h2>
                    <div className="row mb-4">{renderCards(store.characters, "people")}</div>
                </>
            )}

            {store.planets && store.planets.length > 0 && (
                <>
                    <h2>Planets</h2>
                    <div className="row mb-4">{renderCards(store.planets, "planets")}</div>
                </>
            )}

            {store.vehicles && store.vehicles.length > 0 && (
                <>
                    <h2>Vehicles</h2>
                    <div className="row mb-4">{renderCards(store.vehicles, "vehicles")}</div>
                </>
            )}
        </div>
    );
};
