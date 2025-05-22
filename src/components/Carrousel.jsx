import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Carrousel = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleFavorite = (type, uid) => {
        dispatch({ type: "TOGGLE_FAVORITE", payload: `${type}/${uid}` });
    };

    const renderCards = (items, type) => (
        items.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
                <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
                        className="card-img-top"
                        alt={item.name}
                        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"} // fallback
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className="d-flex justify-content-between">
                            <Link to={`/single/${type}/${item.uid}`} className="btn btn-warning">Details</Link>
                            <button className="btn btn-warning" onClick={() => handleFavorite(type, item.uid)}>❤️</button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );

    return (
        <div className="container mt-4">
            <h2>Characters</h2>
            <div className="row mb-4">
                {renderCards(store.characters, "people")}
            </div>

            <h2>Planets</h2>
            <div className="row mb-4">
                {renderCards(store.planets, "planets")}
            </div>

            <h2>Vehicles</h2>
            <div className="row mb-4">
                {renderCards(store.vehicles, "vehicles")}
            </div>
        </div>
    );
};
