import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST
    });
    const { data} = await axios.get('/api/products'); 
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      playload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      playload: error.response && error.response.data.message ? error.response.data.message: error.message,
    })
  }
}; 
export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
    });
    const { data} = await axios.get(`/api/products/${id}`); 
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      playload: data
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      playload: error.response && error.response.data.message ? error.response.data.message: error.message,
    })
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET
  })
}