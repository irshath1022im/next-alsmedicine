import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import Link from 'next/link'



function Layouts({children}) {
    return (
        <div className="container">
            <h4 className="text-center p-3 bg-light">ALS MEDICINE INVENTORY</h4>

            <Navbar variant="dark">
               <Link href="/">
                   <Nav.Item>Home</Nav.Item>
                </Link>

                <Link href="/items">
                   <Nav.Item>ITEMS</Nav.Item>
                </Link>
                <NavDropdown title="Admin">
                    
                    <NavDropdown.Item>
                        <Link href="/admin/items/CreateItem">Category</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                       <Link href="/admin/items/CreateItem">New Item</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                       <Link href="/admin/items/CreateBatchNumber">Batch Number</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                       <Link href="/admin/receivings/New">Receiving</Link>
                    </NavDropdown.Item>

                </NavDropdown>
            </Navbar>
        
        {children}
        
        </div>

    )
}


export default  Layouts;