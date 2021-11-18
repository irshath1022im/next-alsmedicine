import { Alert, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";


const ItemSearchResult = ({handleSearchSelectedItem}) =>{

    const searchResult = useSelector(state => state.searchItem)

  
        if(searchResult.loading) {
            return  <Spinner animation="border" />
        }

        if(searchResult.data.length>0) {
                return(
                    searchResult.data.map( item => {
                                    return(
                                        
                                        // <ListGroupItem key={item.id}>{item.title}</ListGroupItem>
                                        <div className="form-check" key={item.id}>
                                            <input className="form-check-input" 
                                                id={item.title} name="flexRadioDefault" 
                                                type="radio" 
                                                onChange = { ()=>handleSearchSelectedItem(item)}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                {item.title}
                                            </label>
                                        </div>
                                    
                                    )
                                })
                )
         }

         if( searchResult.error) {
             return <Alert variant="info">{searchResult.error}</Alert>
         }

         return <Alert variant="info">Search By Item Name or Erp Code</Alert>
 
   
}


export default ItemSearchResult;