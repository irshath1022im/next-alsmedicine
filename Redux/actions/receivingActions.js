import axios from "axios"



export const addNewReceiving = (data) =>{

    //set loading true 

    return async dispatch => {

        dispatch({
            type:'REQUEST',
        })

        let url = `${process.env.NEXT_PUBLIC_API_SERVER}/receivings`

        try {
            const request = await axios.post(url, data)
            const response = await request.data
            
            console.log(response)
            //successfully added

            dispatch({
                type:'SUCCESS',
                payload: {
                    loading:false,
                    error: '',
                    success: true,
                    lastRecordId:response.id
                }
            })
        } catch (error) {
            
            //server related issue\

            // console.log(error.response)
         
                dispatch({
                    type:'REQUEST_ERROR',
                    payload: {
                        loading:false,
                        error: error.response.statusText
                    }
                })
            


            //sql validation issue


        }




    }

}


export const reduxReceivingAction = (receiving_id) =>{

    return  async dispatch => {

        dispatch({
            type:'RECEIVING_REQUEST'
        })

        let url = `${process.env.NEXT_PUBLIC_API_SERVER}/receivings/${receiving_id}`

        try {
            
            const request = await axios.get(url)
            const response = await request.data

            //this return object

            dispatch({
                type: 'RECEIVING_SUCCESS',
                payload: response.data
            })


        } catch (error) {
            

            

        }

    }
}