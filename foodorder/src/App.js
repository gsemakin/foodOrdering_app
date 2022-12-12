import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";
import { store } from "./store/";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Menu } from "./components/Menu/Menu";
import { Reviews } from "./components/Reviews/Reviews";

function App() {
  const [theme] = useState("light");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <Layout>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/restaurants" element={<RestaurantsPage />}>
                <Route path=":restaurantId" element={<Restaurant />}>
                  <Route path="menu" element={<Menu />} />
                  <Route path="reviews" element={<Reviews />} />
                </Route>
              </Route>
            </Routes>
          </Layout>
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
