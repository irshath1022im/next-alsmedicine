import { Card, Col, Form, Row, Button, Spinner, Alert, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSuppliersAction } from "../../../Redux/actions/supplierActions";
import { addNewReceiving } from "../../../Redux/actions/receivingActions";
import Link from 'next/link'


function New() {

    const [newReceiving, setNewReceiving] = useState({
        date:'',
        supplier_id:'',
        po:'',
        invoice_no:'',
        delivery_note:'',
        remark:''
    })


    const dispatch = useDispatch()
    const suppliers = useSelector(state => state.supplierStore)
    const receivingStore = useSelector(state => state.receivingStore)
    

useEffect(() => {
       dispatch(getSuppliersAction())

    }, [])

useEffect(() => {
      
      setNewReceiving({
        date:'',
        supplier_id:'',
        po:'',
        invoice_no:'',
        delivery_note:'',
        remark:''
      }) 

     }, [receivingStore.success])
 

const formHandle = (e) =>{
    e.preventDefault()
    dispatch(addNewReceiving(newReceiving))
}


    return (
        <Card>
            <Card.Header>New Receiving</Card.Header>

            <Card.Body>
                {
                    receivingStore.loading &&
                    <Alert variant="info">
                        <Spinner animation="border" />
                    </Alert>
                }

                {
                    receivingStore.error &&
                    <Alert variant="danger">
                        {receivingStore.error}
                    </Alert>
                }

                {
                    receivingStore.success &&
                    <Alert variant="success">
                        New Receiving Added ...
                        <Link href={`/receivings/${receivingStore.lastRecordId}`}>
                            <Badge>Click Here</Badge>
                        </Link>
                     </Alert>
                }

                <Form onSubmit={ formHandle}>
                    <Row className="p-2">
                        <Col>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" onChange={ (e) => setNewReceiving({
                                ...newReceiving,
                                date: e.target.value
                            })} 
                            value={newReceiving.date}
                            />
                        </Col>

                        <Col>
                            <Form.Label>Supplier</Form.Label>
                            <Form.Select 
                                onChange={ (e)=> setNewReceiving({
                                    ...newReceiving, 
                                    supplier_id: e.target.value
                                    }) 
                                }
                                value={newReceiving.supplier_id}
                                >
                                   
                                <option value={0}>Select</option>
                                {
                                        suppliers.map( item => {
                                            return(
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                            </Form.Select>
                        </Col>

                    </Row>

                    <Row className="p-2">
                        <Col>
                            <Form.Control type="text" placeholder="PO Number" 
                                onChange={ (e)=>setNewReceiving({
                                    ...newReceiving,
                                    po: e.target.value
                                })}

                                value={newReceiving.po}
                            />
                        </Col>

                        <Col>
                            <Form.Control type="text" placeholder="Invoice No"
                                 onChange={ (e)=>setNewReceiving({
                                    ...newReceiving,
                                    invoice_no: e.target.value
                                })}

                                value={newReceiving.invoice_no}
                            />
                        </Col>

                        <Col>
                            <Form.Control type="text" placeholder="Receiving Ref No"
                                 onChange={ (e)=>setNewReceiving({
                                    ...newReceiving,
                                    delivery_note: e.target.value
                                })}

                                value={newReceiving.delivery_note}

                            />
                        </Col>

                    </Row>

                

                        <Row className="p-2">
                            <Col>
                                <Form.Control type="text" placeholder="Remark"
                                     onChange={ (e)=>setNewReceiving({
                                        ...newReceiving,
                                        remark: e.target.value
                                    })}
                                    value={newReceiving.remark}
                                />
                            </Col>                       
                        </Row>

                        <Row className="p-2"> 
                            <Col>
                                <Button variant="success" type="submit" 
                                    disabled={ receivingStore.loading}
                                >Add</Button>
                             </Col>
                        </Row>
                </Form>
                

                    
            </Card.Body>
            
        </Card>
    )
}


export default New

