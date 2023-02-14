import {useQuery, gql} from "@apollo/client"

const PQueryId = gql`
query MESSAGE_QUERY($id: String!){
  message(id: $id) {
    id
    author {
      login
    }
    subject
    body
    language
    metrics {
      views
    }
    view_href
    post_time
  }
}
`

const ParticularIdQuery = (id) => {
    const {data,loading,error} = useQuery(PQueryId, {
        variables : {
            id 
        }   
    })

    return ({
        data,
        loading,
        error
    }
    )
}

export default ParticularIdQuery