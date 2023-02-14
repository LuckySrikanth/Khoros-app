import { useParams} from "react-router-dom"
import ParticularIdQuery from "../Query/ParticularIdQuery"
import {useNavigate} from "react-router-dom"
import {MutatingDots} from "react-loader-spinner"
import "./ParticularId.css"


const DisplayParticularUi = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data, loading, error} = ParticularIdQuery(id)

    if (loading) return(
        <MutatingDots 
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor= '#4fa94d'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )

    return(
        <>
        <h1>Details Of Individual Messge</h1>
        <div className="particularIdCard">
            <div className="oneHalfCard">
            <p className="p"><span>Id: </span>{data?.message?.id}</p>
            <p className="p"><span>Author: </span>{data?.message?.author?.login}</p>
            <p className="p"><span>Subject: </span>{data?.message?.subject}</p>
            <p className="p"><span>Language: </span>{data?.message?.language}</p>
            <p className="p"><span>Viwes: </span>{data?.message?.metrics.views}</p>
            <p className="p"><span>Link : </span><a href={data?.message?.view_href} target="_blank">{data?.message?.view_href}</a></p>
            <p className="p"><span>PostTime: </span>{data?.message.post_time}</p>
            </div>
            <div className="AnotherHalfCard">
                <b>Body : </b>
                <p className="body-content">{data?.message?.body}</p>
            </div>
        </div>
         <div className="back-btn">
         <button type = "button" className="backButton"
         onClick = {() => navigate("/")}>Back</button>
     </div>
     </>
    )

}

export default DisplayParticularUi