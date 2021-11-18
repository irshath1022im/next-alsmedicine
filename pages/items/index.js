import { Alert, Pagination } from "react-bootstrap"
import Link from 'next/link'
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../../components/ItemCard";
import { getItems } from "../../externalRequests/apiRequests";


function ItemHome (props) {

// console.log(props)

  const [items, setItems] = useState(props.data) 
  const [meta, setMeta] = useState(props.meta)
  const [links, setLinks] = useState(props.links)


const getNextItems = async (url) =>{

    try {

        const result = await getItems(url)

        setItems(result.data)
        setMeta(result.meta)
        setLinks(result.links)
        
    } catch (error) {
        
        console.log(error)
    }



}


    if(items.length > 0 ) {
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">ITEMS <Link href="/admin/items/CreateItem">
                        <span><button className="btn btn-sm bg-primary">+</button></span></Link>
                    </h4>

    
                    <table className="table">
                        <thead className="table-secondary">
                            <tr>
                                <th>#</th>
                                <th>ERP CODE</th>
                                <th>NAME</th>
                                <th>QTY</th>
                                <th>Batches</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map( (item,key) => {
                                    return(
                                        <ItemCard item={item} key={key}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        {/* {pagination_items} */}

                        {
                            meta.links &&
                                meta.links.map( (link,key) =>{
                                    return(
                                        <Pagination.Item
                                            key={key}
                                            active={link.active}
                                            onClick={ ()=>getNextItems(link.url)}
                                            >
                                        {link.label}
                                        
                                        </Pagination.Item>
                                    )
                                })
                        }

                    </Pagination>
                    
                
    
    
                </div> 

            </div>
        )
    } else {
        return(
            <div>
                <Alert variant="info">Waiting for Items....</Alert>
            </div>
        )
    }

   
}


export default ItemHome

export async function getServerSideProps(context){

    // console.log('from server render')
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/items`
    
    try {
        const items = await getItems(url)

        return {
            props: items
        }
        
    } catch (error) {
        
        return {
            notFound: true
        }

    }    

     
}