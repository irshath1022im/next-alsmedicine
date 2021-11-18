import { Table } from "react-bootstrap"



 function ConsumptionTable({consumptions}) {
    return (
        <>
            <Table>                                                   
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Batch #</th>
                        <th>Location</th>
                        <th>Qty</th>
                        <th>Issued By</th>
                    </tr>
                </thead>

                <tbody>

                {

                    consumptions.map( (item,key) => {
                        return (
                        <tr key={key}>
                            <td>{item.date}</td>
                            <td>{item.batch_number}</td>
                            <td>{item.location}</td>
                            <td>{item.qty}</td>
                            <td>Issued By</td>
                        </tr>
                        )
                    })
                }
                
                    
                </tbody>
            </Table>
        </>
    )
}


export default ConsumptionTable