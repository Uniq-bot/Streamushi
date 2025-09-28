import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import PlayerPage from "./pages/PlayerPage.jsx";
import SearchDetail from "./pages/SearchDetail.jsx";
import AnimeList from "./pages/AnimeList.jsx";
import SignIn from "./pages/SignIn.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
const App = () => {
    return (
        // i am in demo branch//
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/anime/:id" element={<PlayerPage />} />
                    <Route path={"/search/:name"} element={<SearchDetail />} />
                    <Route path={"/anime-list/:input"} element={<AnimeList />} />
                    <Route path={"/anime-list/"} element={<AnimeList />} />
                </Route>
                {/* Routes without NavBar/Footer */}
                <Route path={"/signin"} element={<SignIn />} />

            </Routes>
        </BrowserRouter>
    )
}
export default App
