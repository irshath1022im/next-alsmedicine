import axios from "axios"
import { useState, useEffect } from "react"
import { Alert, Form, FormControl, InputGroup, Spinner} from "react-bootstrap"
import { BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { searchItemAction} from "../../Redux/actions/itemActions"

const SearchItem = ({sendSelectedItem}) => {

    const [searchValue, setsearchValue] = useState()
    const [searchResult, setSearchResult] = useState([])
    const [error, seterror] = useState()
    const [loading, setLoading] = useState(false)



useEffect(() => {

    if(searchValue !== '') {
        
        searchItemRequest()
    } else {
        seterror('')
        setSearchResult([])
        setLoading(false)
    }
}, [searchValue])



const searchItemRequest = async()=>{

    setLoading(true)

    try {
        const request = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/itemSearch?itemName=${searchValue}`)
        const response = await request.data

            if(response.data.length > 0) {

                setSearchResult(response.data)
                seterror('')
                setLoading(false)
            } else {
                setSearchResult(response.data)
                seterror('No Items are found')
                setLoading(false)
            }
            // console.log(response.data)

    } catch (error) {

        seterror('something went wrong')
        setLoading(false)
    
    }
}

const handleSearchSelectedItem = (value) => {

    setSearchResult([])
    sendSelectedItem(value)
    setsearchValue('')

}


    return(
        <div>
            <InputGroup>
                <InputGroup.Text id="search">
                    <BsSearch />
                </InputGroup.Text>
                <Form.Control 
                    type="text" 
                    placeholder="Search By Items / ERP Code" 
                    onChange={(e)=> setsearchValue(e.target.value)}
                    value={searchValue}
                />
                    
            </InputGroup>

            {
                loading &&
                <Spinner animation="border" />
            }

            {
                searchResult.length > 0 &&
                searchResult.map( item => {
                    return(
                        
                        // <ListGroupItem key={item.id}>{item.title}</ListGroupItem>
                        // <div className="form-check" key={item.id}>
                        //     <input className="form-check-input" 
                        //         id={item.title} name="flexRadioDefault" 
                        //         type="radio" 
                        //         onChange = { ()=>handleSearchSelectedItem(item)}
                        //     />
                        //     <label className="form-check-label" htmlFor="flexRadioDefault1">
                        //                         {item.title}
                        //     </label>
                        // </div>

                        <InputGroup className="mb-3">
                            <InputGroup.Checkbox 
                                onChange = { ()=>handleSearchSelectedItem(item)}
                            />
                            <FormControl placeholder={item.title}  />
                        </InputGroup>
                    
                    )
                })
            }

            {
                error &&
                <Alert variant="info">{error}</Alert>
            }

        </div>


    )
}


export default SearchItem;