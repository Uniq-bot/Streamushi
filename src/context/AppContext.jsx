import {createContext, useContext, useEffect, useState} from "react";
import {dummyAnime} from "../assets/assets.js";


export const AppContext = createContext();

 const AppContextProvider = ({children}) => {
     const [animes, setAnimes]=useState([])




     // fetching data
     useEffect(()=>{
         setAnimes(dummyAnime)
     },[]);
     console.log(animes)


     return(
        <AppContext.Provider value={{animes}}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;