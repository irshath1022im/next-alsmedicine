import { useEffect, useState } from "react"
import { Card, Row, Col, Button, Tabs, Tab } from "react-bootstrap"
import Consumption from "../../components/Consumption"
import ItemBatches from "../../components/ItemBatches"
import ReceivingTable from "../../components/Receivings/ReceivingTable"
import data from "../../data/items"
import { getItem } from "../../externalRequests/apiRequests"

 function Index({data,id}) {

    const [sumInStock, setSumInStock] = useState(0)


    useEffect(() => {
       
        let total=0

       data.batch_numbers.map( el => {
            return total += el.inStock
        })

        setSumInStock(total)

    }, [])

    return (
        <Card>
            <Card.Header>{data.item_name} 
                <span>
                    <Button variant="info">ERP CODE:- {data.erp_code}</Button>
                    <Button variant={`${sumInStock != 0 ? 'success' : 'danger'}`}>inStock: {sumInStock}</Button>
                </span>
            </Card.Header>

            <Card.Body>
                <Row>
                    <Col sm={12} md={4}>
                        <img src="/img/medicine.jpg" className="img-fluid" />
                    </Col>

                    <Col sm={12} md={8} className="p-2">

                        <Tabs defaultActiveKey="batches" variant="tabs">
                            <Tab title="Batches" eventKey="batches">

                                <ItemBatches 
                                    batch_numbers={data.batch_numbers}
                                />
                            </Tab>

                            <Tab title="Consumptions" eventKey="consumption">
                                <Consumption 
                                
                                    batch_numbers={data.batch_numbers}
                                />
                            </Tab>

                            <Tab title="Receivings" eventKey="receiving">
                                <ReceivingTable 
                                
                                batch_numbers={data.batch_numbers}
                                />
                            </Tab>

                        </Tabs>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}


export default Index



export async function getServerSideProps(context) 
{
    const {params} = context
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/items/${params.id}`

    try {

        const result = await getItem(url)
        // console.log(result)

        return {
            props: {
                id: params.id,
                data: result.data
            }
        }
        
    } catch (error) {
        
        return {
            notFound:true
         }
    }

   
}