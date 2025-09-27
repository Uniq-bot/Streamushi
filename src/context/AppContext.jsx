import {createContext, useContext, useEffect, useState} from "react";
import {dummyAnime} from "../assets/assets.js";



export const AppContext = createContext();

 const AppContextProvider = ({children}) => {
     const [animes, setAnimes]=useState([])
     const fetchAnime= async ()=>{
         setAnimes(dummyAnime)
     }
     // fetching data
     useEffect(()=>{
         fetchAnime()
     },[]);









    return(
        <AppContext.Provider value={{animes}}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;