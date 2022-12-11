import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import { store } from "./store/";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { Restaurant } from "./components/Restaurant/Restaurant";

function App() {
	const [theme] = useState("light");

	return (
		<Provider store={store}>
			<BrowserRouter>
				<ThemeContext.Provider value={theme}>
					<Layout></Layout>
					<Routes>
						<Route index element={<HomePage />} />
						<Route path="/restaurants" element={<RestaurantsPage />}></Route>
						<Route path=":restaurantId" element={<Restaurant />}></Route>
					</Routes>
				</ThemeContext.Provider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
