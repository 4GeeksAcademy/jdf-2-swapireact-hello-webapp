import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { store } = useGlobalReducer();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/"><span className="navbar-brand mb-0 h1">Los Yedi</span></Link>
                <div className="ml-auto dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos ({store.favorites.length})
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length === 0 ? (
                            <li><span className="dropdown-item">Vacío</span></li>
                        ) : (
                            store.favorites.map((fav, i) => (
                                <li key={i}>
                                    <Link to={`/single/${fav}`} className="dropdown-item">
                                        {fav}
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
