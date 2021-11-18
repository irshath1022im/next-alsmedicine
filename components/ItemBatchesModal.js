import { Modal, Button} from "react-bootstrap";
import ItemBatches from "./ItemBatches";



export default function ItemBatchesModal({show, handleClose, batch_numbers,item_name}) {

            return (
              <>
               
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{item_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    <ItemBatches 
                      batch_numbers={batch_numbers}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
}
