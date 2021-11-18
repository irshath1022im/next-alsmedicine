import { Modal,Button, Table, } from "react-bootstrap"


function ModalReceivingDetails({show,handleClose, receiving_details}) {
    const {date,invoice_no, po,supplier_name} = receiving_details
    return (
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Receiving Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Supplier</th>
                            <th>PO#</th>
                            <th>Invoice #</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>{date}</td>
                            <td>{supplier_name}</td>
                            <td>{po}</td>
                            <td>{invoice_no}</td>
                        </tr>
                    </tbody>
                </Table>
                

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>

        </Modal>
    )
}



export default ModalReceivingDetails