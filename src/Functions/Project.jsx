import axios from "axios";

export const remove = async (id) => 
    await axios.delete(import.meta.env.VITE_APP_API_URL + '/project/' + id)


export const create = async (data) => 
    await axios.post(import.meta.env.VITE_APP_API_URL + '/project', data)


export const getdata = async () => {
    return await axios.get(import.meta.env.VITE_APP_API_URL + '/project')
}

export const read = async (id) => {
    return await axios.get(import.meta.env.VITE_APP_API_URL + '/project/', id)
}

export const update = async (id, data) => {
    return await axios.post(import.meta.env.VITE_APP_API_URL + '/project/' + id, data)
}