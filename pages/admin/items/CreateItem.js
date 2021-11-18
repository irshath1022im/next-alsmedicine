import axios from "axios";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function CreateItem() {

const [file, setFile] = useState()

const formHandle = (e) => {
    e.preventDefault()
   
    const request = axios.post('/api/createFile', { body: { file}})
    console.log(request.res)


}

    return (
       <Card>
           <Card.Header>New Item</Card.Header>
           <Card.Body>

{/* item, category_id, erp_code, thumbnail */}
                <Form onSubmit={formHandle}> 

                    <Form.Group>
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="text" placeholder="Item Name" />
                        <Form.Text className="text-danger">*</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>ERP CODE</Form.Label>
                        <Form.Control type="text" placeholder="ERP CODE" />
                        <Form.Text className="text-danger">*</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>CategoryID</Form.Label>
                        <Form.Select>
                            <option>Select</option>
                            <option>Medicine</option>
                            <option>Test2</option>
                        </Form.Select>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Thumbnail</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <hr />

                    <Button className="btn" type="submit">SAVE</Button>

                </Form>
           </Card.Body>
       </Card>
    )
}



export default CreateItem;


// export async function getServerSideProps(context){

//     const {req,res} = context

//     // console.log(req)

//     return {
//         props : {}
//     }
    
// }
