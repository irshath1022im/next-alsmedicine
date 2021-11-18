

const receivingInitialState = {
    loading:false,
    receiving:{},
    error:'',
    message: ''
}

export default (state = receivingInitialState, action) => {
    switch (action.type) {

        case 'RECEIVING_REQUEST':
            return {
                ...state,
                loading:true,
                error:'',
                message: 'Requesting Data'
            }   
            
        case 'RECEIVING_SUCCESS':
            return {
                loading:false,
                error:'',
                message:'',
                receiving: action.payload
            }
    
        default:
            return state;
            break;
    }
}