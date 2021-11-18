import axios from "axios";
import { useState } from "react";
import { Accordion, Alert, Card, Spinner, Table } from "react-bootstrap";
import ConsumptionTable from "./Consumptions/ConsumptionTable";


function Consumption({batch_numbers}) {

    const [loading, setloading] = useState(false)
    const [consumptionList, setConsumptionList] = useState([])
    


const getConsumption = async(batch_number_id) =>{

    // we have to query thru item id or  batch number id 
    // because, in consumption table, we have only the id of item and batch number
    setloading(true)

    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/consumption?batch_number_id=${batch_number_id}`

    try {

        const request = await axios.get(url)
        const response = await request.data

        setloading(false)
        setConsumptionList(response.data)
        
  
    } catch (error) {

    }
        

}

    return (

            batch_numbers.length > 0 ?

                    <Accordion defaultActiveKey="0">

                        {
                            batch_numbers.map( (item,key) => {
                                return(
                                    <Accordion.Item key={key} variant="info" eventKey={key} 
                                        >
                                        <Accordion.Header onClick={ ()=>getConsumption(item.batch_number_id)}><span>{item.batch_number} </span>
                                            <span className="badge rounded-pill bg-info">inStock: {item.inStock}</span></Accordion.Header>
                                        <Accordion.Body>
                                            <Card>
                                                <Card.Body>
                                                        {
                                                            loading ?
                                                        
                                                        <Spinner animation="border" />
                                                            
                                                        :

                                                        consumptionList.length > 0 ?
                                                        
                                                            <ConsumptionTable 
                                                                consumptions = {consumptionList}
                                                            />

                                                            :

                                                            <Alert variant="info">No Consumpitions Found...</Alert>

                                                        }
                                                </Card.Body>
                                            </Card>
                                        </Accordion.Body>
                                </Accordion.Item>
                                )
                            })
                        }
                     
                    </Accordion>

            :

            <Alert variant="info"> No Batches Found</Alert>
    )
}



export default Consumption;