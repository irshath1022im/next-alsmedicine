import { Form, Spinner } from "react-bootstrap"
import Link from 'next/link'
import { BsFillPlusSquareFill} from 'react-icons/bs'


export default function BatchNumberOptions({batches, handleBatchNumber}) {


    if(batches.length <= 0) {
        return (
            <>
            <Form.Select disabled>
                         <option>No Items</option>

             </Form.Select>

            <Link
            href="/admin/items/CreateBatchNumber">
            <BsFillPlusSquareFill size="1em" color="green">

            </BsFillPlusSquareFill>
            </Link>
            </>
            
        )
    }

    return (
        <>
        <Form.Select onChange={ (e)=>handleBatchNumber(e.target.value)}>
                <option value="" >Select</option>
                   {
                       batches.map( batch => {
                           return(
                               <option key={batch.id} value={batch.id}
                               >{batch.batch_number}</option>
                           )
                       })
                   }
        </Form.Select>
        <Link
            href="/admin/items/CreateBatchNumber">
            <BsFillPlusSquareFill size="1em" color="green">

            </BsFillPlusSquareFill>
        </Link>
        </>
    )

}
