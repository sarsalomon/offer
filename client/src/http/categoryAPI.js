import {$authHost} from "./index";

export const createCategory = async (traffic) => {
    const {data} = await $authHost.post('api/category/add', traffic)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $authHost.get('api/category')
    return data
}

export const updateCategory = async (id, name)  =>{
    const {data} = await $authHost.post('api/category/updatecategory', {id, name})
    return data
}

export const getCategory = async (id)  =>{
    const {data} = await $authHost.get('api/category/getcategory/' + id)
    return data
}

export const deleteCategory = async (id)  =>{
    const {data} = await $authHost.post('api/category/deletecategory', {id})
    return data
}


