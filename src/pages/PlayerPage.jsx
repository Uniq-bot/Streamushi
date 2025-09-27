import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";

const PlayerPage = () => {
    const {animes}=useContext(AppContext)
    const [watch, setWatch]=useState({})
    const {id}=useParams()
    const portalWatch=animes.find(anime=>anime.id===Number(id))
    useEffect(()=>{
        setWatch(portalWatch)
    },[portalWatch, watch])
    console.log(watch)

    return (
        <div>
            {id}
            {/*{watch.title.romaji.split('')}*/}
        </div>
    )
}
export default PlayerPage
