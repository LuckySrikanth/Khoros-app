import { Link } from "react-router-dom"
import Query from "../Query/Query"
import Search from "../Search/Search"
import {RotatingLines} from "react-loader-spinner"
import "./AllMessage.css"

const AllMessage = () => {
    const {data,loading,error} = Query()

    if (loading) return (
        <RotatingLines
        strokeWidth="5"
        strokeColor="grey"
        width="96"
        animationDuration="0.75"
        visible={true}
        color = "white"
         />
    )

    return (
        <div className="mainContainer">
            <h1>All Messges</h1>
            <Search />
            {
                data?.messages?.items?.map(items => {
                    return(
                        <div className="messageCard">
                            <Link to = {`/message/${items.id}`} className = "link">
                            <h1><b>Id: </b>{items.id}</h1>
                            <h2><b>Subject: </b>{items.subject}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllMessage