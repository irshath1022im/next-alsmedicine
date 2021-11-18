import { combineReducers } from "redux";
import { itemReducer,searchItem } from "./reducers/itemReducer";
import suppliersReducer from "./reducers/suppliersReducer";
import receivingReducer from './reducers/receivingReducer';
import { receivingItemReducer } from "./reducers/receivingItemsReducer";
import singleReceivingReducer from "./reducers/singleReceivingReducer";

const rootReducer = combineReducers({
    itemStore : itemReducer,
    searchItem : searchItem,
    supplierStore : suppliersReducer,
    receivingStore : receivingReducer,
    receivingItemStore: receivingItemReducer,
    singleReceivingStore: singleReceivingReducer
});


export default rootReducer;