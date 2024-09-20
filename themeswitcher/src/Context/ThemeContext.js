import {createContext,useContext} from "react";


export const ThemeContext=createContext({
        curruntMode:"light",
        lightMode:()=>{},
        darkMode:()=>{}
})

export const ThemeContextrprovider=ThemeContext.Provider

export default function Usetheme(){
    return useContext(ThemeContext)
}