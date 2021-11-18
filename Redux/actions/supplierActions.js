import axios from "axios"




export const getSuppliersAction = () => {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/suppliers`
    return async dispatch => {
        // console.log('2')
        try {
            const request = await axios.get(url)
            const response = await request.data
            // console.log(response)
            dispatch({
                type:'GET_SUPPLIERS',
                payload: response
            })
        } catch (error) {
            console.log(error)
        }

    }
}


// export function getSuppliersAction () {
//     return function (dispatch) {
//      return  console.log('hi')
//     }
// }