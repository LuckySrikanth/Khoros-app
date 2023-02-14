import {useQuery, gql} from "@apollo/client"

const GetQuery = gql`
query {
    messages {
      size
      items{
        id
        subject
      }
    }
  }
`



const Query = () => {
    const {data,loading,error} = useQuery(GetQuery)

    return ({
        data,
        loading,
        error
    }
    )
}

export default Query