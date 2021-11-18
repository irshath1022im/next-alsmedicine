import axios from "axios"

export const getItems = async (url) => {

    const request = await axios.get(url)
    const response = await request.data

    return response;
}


export const getItem = async (url) => {

    const request = await axios.get(url)
    const response = await request.data
    return response;

}


export const apiRequestGetSingleReceiving = async(id) => {

    const request = await axios.get(id)
    const response = await request.data
    return response;
}