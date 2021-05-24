import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL



} from '../Constants/productsConstant'


    export const createProduct = (image , ProductName,categoryId) => async (dispatch) => {
        console.log(image, ProductName, categoryId)
        // image.url = image
    try{
        dispatch({ type : CREATE_PRODUCT_REQUEST,})

        const { data } = await axios.post(`/product/new`,{image , ProductName,categoryId})

        dispatch({
            type : CREATE_PRODUCT_SUCCESS,
            payload : data
        })
    }
    catch(err){
        dispatch({
            type : CREATE_PRODUCT_FAIL,
        })

    }
    }
export const updateProduct = (id,ProductName,categoryId,image) =>  async (dispatch) => {
    console.log(id,ProductName,categoryId)
    try{
        dispatch({ type : UPDATE_PRODUCT_REQUEST})

        const { data } = await axios.put(`/product/${id}`,{image,ProductName,categoryId})

        dispatch({
             type : UPDATE_PRODUCT_SUCCESS,
             payload : data
        
        })
    }
    catch(err){
        dispatch({
            type : UPDATE_PRODUCT_FAIL,
        })

    }
}
    export const getProducts = () => async (dispatch) => {
        try {
    
            dispatch({ type: ALL_PRODUCTS_REQUEST })
    
            const { data } = await axios.get(`/products`)

            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: data
            })
    
        } catch (error) {
            dispatch({
                type: ALL_PRODUCTS_FAIL,
            })
        }
    }

    export const deleteProduct = (id) =>  async (dispatch) => {
        try{
            dispatch({ type : DELETE_PRODUCT_REQUEST})

            const {data} = await axios.delete(`/product/${id}`)

            dispatch({
                type: DELETE_PRODUCT_SUCCESS,
                payload: data.success

            })

        }
        catch (error) {
            dispatch({
                type : DELETE_PRODUCT_FAIL
            })
        }
    }