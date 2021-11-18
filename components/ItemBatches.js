import { Card, Table,Alert } from "react-bootstrap"




function ItemBatches({batch_numbers}) {
    return (
        <Card>
         <Card.Body>
             {
                batch_numbers.length > 0 ?

                    <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Batch#</th>
                                    <th>inStock</th>
                                    <th>Ex.Date</th>
                                    <th>Days Remaining</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    batch_numbers.map( (batch_number, key) => {
                                        return(
                                        <tr key={key}>
                                            <td>{batch_number.batch_number_id}</td>
                                            <td>{batch_number.batch_number}</td>
                                            <td>{batch_number.inStock}</td>
                                            <td>{batch_number.expiry_date}</td>
                                            <td>{batch_number.days_remaining}</td>
                                        </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                    </Table>

                :

                
                <Alert variant="info">
                    NO Batches Found
                </Alert>
            }

        </Card.Body>
        </Card>           
    )
}


export default ItemBatches