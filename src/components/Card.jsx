// Card.jsx
const Card = ({ item }) => (
    <div className="card bg-dark text-white" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-warning">Go</a>
                <button className="btn btn-warning">❤️</button>
            </div>
        </div>
    </div>
);

export default Card;
