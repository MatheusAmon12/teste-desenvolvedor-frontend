import axios from "axios"

export const fetchData = async (inputRadioValue, search ) => {
    try {
        const { data } = await axios.get(`http://localhost:3333/data?${inputRadioValue}_like=${search.toUpperCase()}`)
        console.log("request", data)
        return data
    } catch(error){
        throw new Error("Request error: ", error)
    }
}