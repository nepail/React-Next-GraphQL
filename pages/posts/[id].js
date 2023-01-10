import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
    "https://api-ap-northeast-1.hygraph.com/v2/clcogbmkd0uq001uh3ypxhqxf/master"
    )

const IDLIST=gql`
{
    posts{
        id
    }
}
`

export async function getStaticPaths(){
    const {posts} = await client.request(IDLIST);
    return {
        paths:posts.map((post)=>({params:{id:post.id}})),
        fallback: false
    }
}

export function getStaticProps(){
    return {
        props:{
            post:{title:"測試測試"}
        }
    }
}


export default function Post({post}){
    return <div className="blog">blog detail
    <p>{post.title}</p>
    </div>
}