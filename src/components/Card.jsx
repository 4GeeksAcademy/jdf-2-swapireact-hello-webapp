import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const Card = () => {
    const { type, uid } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                const json = await res.json();
                setData(json.result);
            } catch (err) {
                console.error("Error fetching item:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [type, uid]);

    if (loading) return <div className="text-white">Loading...</div>;
    if (!data) return <div className="text-danger">Item not found.</div>;

    const { properties } = data;
    const name = properties?.name || "Unknown";

    return (
        <div className="card mb-3 bg-dark text-white text-center" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={getImageUrl(type, name)}
                        className="img-fluid rounded-start"
                        alt={name}
                        onError={(e) => {
                            e.target.onerror = null;
                          
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <ul className="list-group list-group-flush bg-dark text-white">
                            {properties &&
                                Object.entries(properties)
                                    .filter(([key]) => !["created", "edited", "url"].includes(key))
                                    .map(([key, value]) => (
                                        <li key={key} className="list-group-item bg-dark text-white">
                                            <strong>{key}:</strong> {value}
                                        </li>
                                    ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
