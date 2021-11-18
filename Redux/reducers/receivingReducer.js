

const receivingInitialState = {
    loading:false,
    receivings:[],
    error:'',
    success: false,
    lastRecordId:''
}

export default (state = receivingInitialState, action) => {
    switch (action.type) {

        case 'REQUEST':
            return state = {
                ...state,
                loading:true,
                error:'',
                success: false,
                lastRecordId:''
            }

        case 'REQUEST_ERROR':
            return state = {
                ...state,
                ...action.payload
            }

        case 'SUCCESS':
            return state = {
                ...state,
                ...action.payload
            }

        case 'GET_RECEIVINGS':
            return state;
            break;

        case 'ADD_RECEIVING':
            return state = {
                ...state,
                loading:false,
                receivings: state.receivings.concat(action.payload),
                error:''
            }

            
    
        default:
            return state;
            break;
    }
}