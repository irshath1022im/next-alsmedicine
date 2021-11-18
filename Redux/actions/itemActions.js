import axios from "axios"


export const searchItemAction = (searchValue) => {

    return async dispatch => {

        dispatch({
            type: 'START_TO_SEARCH',
        })

        try {
            const request = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/itemSearch?itemName=${searchValue}`)
            const response = await request.data

            if(response.data.length > 0) {

                dispatch({
                    type: 'SEARCH_ITEM_RESULT',
                    payload: response.data
                })

            } else {
                dispatch({
                    type: 'SEARCH_ITEM_NO_RESULT',
                    payload: response.data
                })
            }

    
        } catch (error) {

            dispatch({
                type: 'SEARCH_ITEM_NO_RESULT',
            })
            
          console.log(error)
        }
    }

}

// export const searchItemEmpty = () => {

//     return async dispatch =>{
//         await
//     }
// }