import { useState,useEffect } from "react"
import { Alert,  Card, Spinner, Table } from "react-bootstrap"
import {MdAddCircle} from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux"
import ModalFormReceivingItem from "../../components/ReceivingItems/ModalFormReceivingItem"
import { apiRequestGetSingleReceiving } from "../../externalRequests/apiRequests"
import { reduxReceivingAction } from "../../Redux/actions/receivingActions"

function Receiving({receiving_id}) {
    
    const singleReceivingStore = useSelector(state => state.singleReceivingStore)

    const [showReceivingItemModal, setshowReceivingItemModal] = useState(false)
    // const [data, setData] = useState()


    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(reduxReceivingAction(receiving_id))

    }, [])


    // return (
    //     <div>
    //         {singleReceivingStore.receiving.id}
    //     </div>
    // )


    if (singleReceivingStore.receiving) {

                return (
                    <Card>
                        <Card className="p-2">
                            <Card.Header className="bg-secondary text-light h5">RECEIVING # 
                                <span className="badge bg-info">{receiving_id}</span>
                                {
                                    singleReceivingStore.loading &&
                                    <span><Spinner animation="border" variant="light" /> </span>
                                }
                                
                            </Card.Header>
                            <Card.Body>
                                <Table>
                                    <thead>
                                        <tr>
                                        <th>DATE</th>
                                        <th>SUPPLIER</th>
                                        <th>PO</th>
                                        <th>INVOICE NO</th>
                                        <th>DELIVERY REF NO</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                        
                                    
                                                    <tr>
                                                        <td>{singleReceivingStore.receiving.date}</td>
                                                        <td>{singleReceivingStore.receiving.supplier_name}</td>
                                                        <td>{singleReceivingStore.receiving.po}</td>
                                                        <td>{singleReceivingStore.receiving.invoice_no}</td>
                                                        <td>{singleReceivingStore.receiving.delivery_note}</td>
                                                    </tr>
                                            
                                        
                                        }
                                    </tbody>
                                </Table>

                                
                        <Card className="p-2">
                            <Card.Header className="bg-light text-warning h5" >ITEMS</Card.Header>
                            <Card.Body>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>ITEM ID</th>
                                            <th>ERP #</th>
                                            <th>ITEM NAME</th>
                                            <th>BATCH #</th>
                                            <th>QTY</th>
                                            <th>U.PRICE</th>
                                            <th>COST</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            singleReceivingStore.receiving.receiving_items &&
                                            singleReceivingStore.receiving.receiving_items.map( item =>{
                                                return(
                                                    <tr key={item.id}>
                                                        <td>{item.item_id}</td>
                                                        <td>{item.erp_code}</td>
                                                        <td>{item.item_name}</td>
                                                        <td>{item.batch_number}</td>
                                                        <td>{item.qty}</td>
                                                        <td>{item.unit_price}</td>
                                                        <td>{item.cost}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                <MdAddCircle 
                                    onClick ={ ()=>setshowReceivingItemModal(true)}    
                                 />

                                <ModalFormReceivingItem 
                                    show={showReceivingItemModal}
                                    handleClose = { ()=>setshowReceivingItemModal(false)}
                                />
                            </Card.Body>
                        </Card>
                            </Card.Body>
                        </Card>


                    </Card>
                )
    } 

    return (
        <Alert variant="info">Waiting for Content</Alert>
    )



}


export default Receiving


export async function getServerSideProps({params}) {
    return {
        props: {
            receiving_id: params.id,
        }
    }
}

