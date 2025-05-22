import React from "react";

export const Carrousel = () => {
    const characters = [
        { name: "Luke Skywalker", description: "Jedi Knight", image: "https://via.placeholder.com/300x200" },
        { name: "Leia Organa", description: "Rebel Leader", image: "https://via.placeholder.com/300x200" },
        { name: "Darth Vader", description: "Sith Lord", image: "https://via.placeholder.com/300x200" }
    ];

    const planets = [
        { name: "Tatooine", description: "Desert planet", image: "https://via.placeholder.com/300x200" },
        { name: "Alderaan", description: "Peaceful world", image: "https://via.placeholder.com/300x200" },
        { name: "Hoth", description: "Icy terrain", image: "https://via.placeholder.com/300x200" }
    ];

    const vehicles = [
        { name: "X-Wing", description: "Rebel starfighter", image: "https://via.placeholder.com/300x200" },
        { name: "TIE Fighter", description: "Imperial spacecraft", image: "https://via.placeholder.com/300x200" },
        { name: "Millennium Falcon", description: "Fastest ship in the galaxy", image: "https://via.placeholder.com/300x200" }
    ];

    const renderCards = (items) => (
        items.map((item, index) => (
            
            <div className="col-md-4 bg-dark text-white" key={index}>
                <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-between">
                            <a href="#" className="btn btn-warning">Go somewhere</a>
                            <button className="btn btn-warning">❤️</button>
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
                {renderCards(characters)}
            </div>

            <h2>Planets</h2>
            <div className="row mb-4">
                {renderCards(planets)}
            </div>

            <h2>Vehicles</h2>
            <div className="row mb-4">
                {renderCards(vehicles)}
            </div>
        </div>
    );
};
