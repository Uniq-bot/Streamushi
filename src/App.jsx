import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import NavBar from "./common/NavBar.jsx";
import PlayerPage from "./pages/PlayerPage.jsx";
import SearchDetail from "./pages/SearchDetail.jsx";
import Footer from "./common/Footer.jsx";
import AnimeList from "./pages/AnimeList.jsx";
const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime/:id" element={<PlayerPage />} />
                <Route path={"/search/:name"} element={<SearchDetail />} />
                <Route path={"/anime-list/*"} element={<AnimeList />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App
