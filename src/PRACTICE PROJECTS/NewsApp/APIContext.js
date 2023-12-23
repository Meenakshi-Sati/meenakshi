import { createContext, useEffect, useState, useReducer } from "react";
import reducer from "./Reducer";

const APIContext = createContext()
let initialState = {
    loading: false,
    data: [],
}

function APIProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [currentPage, setCurrentPage] = useState(1)
    const[category,setCategory]=useState("general")

    useEffect(() => {
        getNewsData()
    }, [category])

    async function getNewsData() {
        dispatch({ type: "LOADING" })
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=108d93ae2489457b8c30bcf37347fabd&${currentPage}`)
        let data = await response.json()
        dispatch({ type: "DATA", payload: data })
        console.log(data)
    }

    return (
        <APIContext.Provider value={{category,setCategory,currentPage, setCurrentPage, state }}>{children}</APIContext.Provider>
    )
}
export { APIContext, APIProvider }

