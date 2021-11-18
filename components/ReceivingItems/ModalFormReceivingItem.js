
import { Modal,Button } from 'react-bootstrap'
import FormReceivingItem from './FormReceivingItem'

export default function ModalFormReceivingItem({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton className="h5">NEW ITEM</Modal.Header>
            <Modal.Body>

                <FormReceivingItem 
                    handleClose={handleClose}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
               
            </Modal.Footer>
        </Modal>
    )
}
