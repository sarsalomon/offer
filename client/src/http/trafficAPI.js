import {$authHost} from "./index";

export const createTrafficurl = async (traffic) => {
    const {data} = await $authHost.post('api/traffic/add', traffic)
    return data
}

export const fetchTrafficurls = async (categoryId, subcategoryId, productorservice) => {
    const {data} = await $authHost.get('api/traffic', {params: {
            categoryId, subcategoryId, productorservice
        }})
    return data
}

export const updateTrafficurl = async (id, name, description, fullUrl, shortUrl)  =>{
    const {data} = await $authHost.post('api/traffic/updatetraffic', {id, name, description, fullUrl, shortUrl})
    return data
}

export const getTrafficurl = async (id)  =>{
    const {data} = await $authHost.get('api/traffic/gettraffic/' + id)
    return data
}

export const deleteTrafficurl = async (id)  =>{
    const {data} = await $authHost.post('api/traffic/deletetraffic', {id})
    return data
}


