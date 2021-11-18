import axios from "axios"
import { useState } from "react"
import { Accordion, Alert, Card, Spinner, Table,Button } from "react-bootstrap"
import ModalReceivingDetails from "./ModalReceivingDetails"
import { MdAddCircle } from 'react-icons/md';

function ReceivingTable({batch_numbers}) {


    const [loading, setloading] = useState(false)
    const [receivings, setReceiving] = useState([])
    const [show, setShow] = useState(false);
    const [selectedReceiving, setSelectedReceiving] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = (receiving_details) => 
        {
            setSelectedReceiving(receiving_details)

                                setShow(true);
                            
        }


  const getReceivings = async (batch_number_id) => {

    setloading(true)
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/receivingsByBatchNumber/${batch_number_id}`

    try {
        
        const result = await axios.get(url)
        const response = await result.data

        setReceiving(response.data)
        
        setloading(false)
    } catch (error) {

        
    }

  }  

    if(batch_numbers.length <= 0) {
        return(
            <Alert variant="info">No Batches Found!</Alert>
        )
    }
 
    return (
        <Card>
            <Card.Body>

            <Accordion defaultActiveKey="0">

                {
                    batch_numbers.map( (item,key) => {
                        return(
                            <Accordion.Item key={key} variant="info" eventKey={key} 
                                >
                                <Accordion.Header 
                                    onClick={ ()=>getReceivings(item.batch_number_id)}
                                ><span>{item.batch_number} </span>
                                    <span className="badge rounded-pill bg-info">inStock: {item.inStock}</span></Accordion.Header>
                                            <Accordion.Body>
                                                <Card>
                                                    <Card.Body>
                                                            {
                                                                loading ?
                                                            
                                                            <Spinner animation="border" />
                                                             
                                                            :                                                         
                                                            receivings.length > 0 ?
                                                        <>
                                                            <Table responsive>                                                   
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Batch #</th>
                                                                    <th>Item Name</th>
                                                                    <th>Qty</th>
                                                                    <th>Unit Price</th>
                                                                    <th>Total</th>
                                                                    <th>Expiry Date</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                            
                                                            <tbody>
                                            
                                                            {
                                            
                                                                receivings.map( (item,key) => {
                                                                    return (
                                                                    <tr key={key}>
                                                                        <td>{item.date}</td>
                                                                        <td>{item.batch_number}</td>
                                                                        <td>{item.item_name}</td>
                                                                        <td>{item.qty}</td>
                                                                        <td>{item.unit_price}</td>
                                                                        <td>{item.cost}</td>
                                                                        <td>{item.expiry_date_forHuman}</td>
                                                                        <td>
                                                                                <Button 
                                                                                    onClick={ ()=>handleShow(item.receiving_details)}
                                                                                >More</Button>
                                                                        </td>
                                                                    </tr>
                                                                    )
                                                                })
                                                            }
                                                            
                                                                
                                                            </tbody>
                                                        </Table>

                                                        <MdAddCircle />
                                                        

                                                        </>



                                                            :

                                                            <>

                                                                <Alert variant="info">No More Receivings</Alert>
                                                                
                                                                 <MdAddCircle />

                                                                </>

                                                            
                                                            }

                                                        <ModalReceivingDetails 
                                                            show={show}
                                                            handleClose = { ()=>handleClose()}
                                                            receiving_details = { selectedReceiving }
                                                        />
                                                    </Card.Body>
                                                </Card>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                    )
                                })
                            }

                </Accordion>
            </Card.Body>
        </Card>
    )
}



export default ReceivingTable