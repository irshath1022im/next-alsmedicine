import { useState } from "react";
import ItemBatchesModal from "./ItemBatchesModal";
import Link from 'next/link'

function ItemCard ({item}){
    const { erp_code, id, item_name, batch_numbers} = item;
    const [show, setShow] = useState(false);      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let total= 0;

    batch_numbers.map( item => {
        total += item.inStock
    })
   
    return(
        <>
        <tr>
           <Link href={ `/items/${id}`}>
               <td scope="row">{id}</td>
            </Link>
            <td>{erp_code}</td>
            <td>{item_name}</td>
            
            <td>{total}</td>
            <td>
                <button className="btn btn-sm bg-info" onClick={handleShow}>
                    <span className="badge rounded-pill bg-dark">{batch_numbers.length} </span>
                    - Batches</button></td>
            </tr>

        <ItemBatchesModal 
            show={show}
            handleClose={ ()=> handleClose()}
            batch_numbers = {batch_numbers}
            item_name={item_name}
        /> 
         </>
    )

}


export default ItemCard;


