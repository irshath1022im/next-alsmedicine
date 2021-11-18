import { Alert, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import {BsFillPlusSquareFill} from "react-icons/bs"
import Link from "next/link";
import SearchItem from '../Items/SearchItem'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { reduxReceivingAction } from "../../Redux/actions/receivingActions";




export default function FormReceivingItem({handleClose}) {

    const dispatch = useDispatch()

    //we dont' know the active receiving id, thats y , we are getting from redux store
    const activeReceiving = useSelector(state => state.singleReceivingStore.receiving)

const [batches, setbatches] = useState([])
const [selectedItem, setselectedItem] = useState()
const [loading, setLoading] = useState(false)
const [newReceiving, setNewReceiving] = useState({
    receiving_id: activeReceiving.id,
    item_id:'',
    batch_number_id:'',
    qty:'',
    unit_price:'',
    cost:'',
    remark:'',
})

const [error, setError] = useState(false)
const [msg, setMsg] = useState('')


const handleSearchSelectedItem = (input) =>{

    // console.log(input)
    setselectedItem(input.title)
    setbatches(input.batch_numbers)

    setNewReceiving({
        ...newReceiving,
        item_id: input.id,
    })
   
}  


const formhandle = async (e) =>{
e.preventDefault()
    setLoading(true)
    setMsg('Sending Request')

 
    let url = `${process.env.NEXT_PUBLIC_API_SERVER}/receivingItems`

    try {
        const request = await axios.post(url, newReceiving)
        const response = await request.data
        console.log(response)

        setLoading(false)
        setMsg('Item has been addedd...')
        setError(false),
        setNewReceiving({
            receiving_id: activeReceiving.id,
            item_id:'',
            batch_number_id:'',
            qty:'',
            unit_price:'',
            cost:'',
            remark:'',
        })
        setselectedItem('')

        dispatch(reduxReceivingAction(activeReceiving.id))


    } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
        setMsg(error.response.statusText)
    }


}


if(loading) {
        return (
            <>
            <Spinner animation="border" />
            </>

        )
}

return (
            <Card bg="light">
                        <Card.Header className="bg-success">Items</Card.Header>
                        <Card.Body>

                            {
                                error && <Alert variant="danger">{msg}</Alert>
                            }

                        <Row>
                            <Col className="d-flex align-items-center">
                                  
                                <SearchItem 
                                    sendSelectedItem = {handleSearchSelectedItem}
                                />

                                    <Link
                                    href="/admin/items/CreateItem">
                                        <BsFillPlusSquareFill size="1em" color="green" >

                                        </BsFillPlusSquareFill>
                                    </Link>
                            </Col>

                            <Col className="p-2 d-flex align-items-center">
                                  {/* <BatchNumberOptions 
                                    batches = {batches}
                                    handleBatchNumber = {handleBatchNumberSelection}
                                  /> */}
                            </Col>

                {/* SearchResult Card */}

                          

                <Col sm={12}>

                            {/* <ItemSearchResult 
                                handleSearchSelectedItem = {handleSearchSelectedItem}
                            /> */}
                        
                </Col>
                            
                        
                {/* SearchResult Card */}

                        </Row>
                          
                


                    <Form onSubmit={ formhandle}>
                        <Row className="p-2">
                            <Col>
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" required  disabled value={selectedItem}/>
                            </Col>

                            <Col>
                            <Form.Label>Batch</Form.Label>
                            <Form.Select 
                                onChange={ (e)=> setNewReceiving({
                                                ...newReceiving,
                                                batch_number_id: e.target.value
                                            })}

                                    value={newReceiving.batch_number_id}
                                >
                                

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
                            </Col>

                            <Col>
                                <Form.Label>Qty</Form.Label>
                                <Form.Control type="number" placeholder="Qty" required 
                                    onChange={ (e)=>setNewReceiving({
                                        ...newReceiving,
                                        qty:e.target.value
                                    })}
                                    value={newReceiving.qty}
                                />
                            </Col>

                            <Col>
                               <Form.Label>Unit Price</Form.Label>
                                <Form.Control type="number" placeholder="Unit Price"  
                                      onChange={ (e)=>setNewReceiving({
                                        ...newReceiving,
                                        unit_price:e.target.value
                                    })}
                                    value={newReceiving.unit_price}
                                />
                            </Col>

                            <Col>
                            <Form.Label>Cost</Form.Label>
                                <Form.Control type="number" placeholder="Total" required
                                
                                onChange={ (e)=>setNewReceiving({
                                    ...newReceiving,
                                    cost:e.target.value
                                })}
                                value={newReceiving.cost}
                                />
                            </Col>
                        </Row>

                        <button className=" btn btn-outline-success"

                        >ADD</button>

                    </Form>

                        </Card.Body>
            </Card>

    )
}


