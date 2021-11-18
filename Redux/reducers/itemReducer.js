

const initialState = [{
    id:1,
    title:'irshath'
}]


export const itemReducer = ( state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
        return state = [action.payload]
        
        default:
            return state;
            break;
    }

}

const searchItemInitialState = {
    loading: false,
    data:[],
    error:''
}

export const searchItem = ( state=searchItemInitialState, action) => {
    switch (action.type) {

        case 'START_TO_SEARCH':
            return state = {
                data:[],
                loading:true,
                error:''
            }

        case 'SEARCH_ITEM_RESULT':
            return state = {
                ...state,
                loading:false,
                data:action.payload
            }
            break;

        case 'SEARCH_ITEM_NO_RESULT':
            return state = {
                ...state,
                loading:false,
                data:action.payload,
                error: 'Sorry!, No Items Found...'
            }

        case 'EMPTY_SEARCH_ITEM':
            return state = {
                ...state,
                loading: false,
                data:[],
                error: 'Search By Item Name or Erp Code'
            }
            break;
    
        default:
            return state
            break;
    }
}