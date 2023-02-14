import { useLazyQuery,gql } from "@apollo/client"
import { useState } from "react"
import {Link} from "react-router-dom"
import {ThreeDots} from "react-loader-spinner"
import "./Search.css"


const LzyQuery = gql`
query Lazy($id : String!){
    message (id : $id) {
      id
      subject
    }
  }
`

const Search = () => {
    const [num, setNum] = useState('')

    const [getSearchMessage, {data,loading,error}] = useLazyQuery(LzyQuery, {
        variables : {
            id : num
        }
    })

    console.log({data, loading,error})
    if (loading) return(
        <ThreeDots 
        width="80" 
        height="80" 
        color="#4fa94d" 
        radius="9"
        wrapperStyle={{}}
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperClassName=""
        />
    )
    if(error) <h1>..Error</h1>

    return (
        <>
        <div>
            <input  placeholder= "You can Search by ID" value = {num} onChange= {(e) => setNum(e.target.value)} />
            <button onClick={() => getSearchMessage()}>Search</button>
        </div>
        <div className="messageCard">
            {
                data?.message === null ? <p className="enterValid">EnterValidId</p> : (
                     (
                        <div>
                            <Link to = {`/message/${num}`}>
                            <h1>{data?.message?.id}</h1>
                            <h2>{data?.message?.subject}</h2>
                            </Link>
                        </div>
                            )
            )
                    }
        </div>
        </>
    )

}

export default Search 