import { Card, Form, FormGroup, Button } from "react-bootstrap";


export default function CreateBatchNumber() {
    return (
        <Card>
            <Card.Header>Batch Number</Card.Header>
            <Card.Body>
                <Form>

                <FormGroup>
                        <Form.Label>Items</Form.Label>
                        <Form.Select>
                            <option>Item1</option>
                            <option>Itesm2</option>
                        </Form.Select>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Batch Number</Form.Label>
                        <Form.Control type="text" placeholder="Batch Number" />
                    </FormGroup>


                    <FormGroup>
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control type="date" placeholder="Expiry Date" />
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Initial Qty</Form.Label>
                        <Form.Control type="number" placeholder="Expiry Date" />
                    </FormGroup>

                    <Button>Save</Button>

            </Form>
            </Card.Body>
        </Card>
    )
}
