
import { Carrousel } from "../components/Carrousel.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5 bg-black text-white">
			<h1>Los Yedi</h1>
			<Carrousel/>
		</div>
	);
}; 