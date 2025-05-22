
import { Carrousel } from "../components/Carrousel.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { FetchAPI } from "../components/FetchAPI.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		const loadData = async () => {
			const characters = await fetchEntity("people");
			dispatch({ type: "SET_CHARACTERS", payload: characters });

			const planets = await fetchEntity("planets");
			dispatch({ type: "SET_PLANETS", payload: planets });

			const vehicles = await fetchEntity("vehicles");
			dispatch({ type: "SET_VEHICLES", payload: vehicles });



		};

		loadData();
	}, []);

	return (
		<div className="text-center mt-5 bg-black text-white">
			<h1>Los Yedi</h1>
			<Carrousel />
		</div>
	);
}; 