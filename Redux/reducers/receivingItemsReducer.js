

export const receivingItemReducer = (state={}, action) =>{

    switch (action.type) {


        case 'ACTIVE_RECEIVING':
            return state = action.payload
            break;

    

        case 'ADD_RECEIVING_ITEM':
            return {
                ...state,
                receiving_items : state.receiving_items.concat(action.payload)
            }
            break;
    
        default:
            return state;
            break;
    }

}