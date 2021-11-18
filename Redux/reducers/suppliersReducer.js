
const suppliers = [];

export default ( state = suppliers, action) => {

    switch (action.type) {
        case 'GET_SUPPLIERS':
            return state = action.payload;
            break;
    
        default:
            return state;
            break;
    }

}