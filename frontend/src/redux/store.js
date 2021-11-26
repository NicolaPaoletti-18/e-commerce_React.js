import { combineReducers, applyMiddleware, createStore} from 'redux'; 
import thunk from 'redux-thunk';
import { composeWidthDevTools, composeWithDevTools} from 'redux-devtools-extension';

//reducers
import { cartReducers } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducers } from './reducers/productReducers';

const reducer = combineReducers({
 cart: cartReducers, 
 getProducts: getProductsReducers,
 getProductsDetails: getProductDetailsReducer, 
}); 

const middelware = [thunk]; 

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store; 

