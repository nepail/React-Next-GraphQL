import Head from "next/head";
import Menu from "../components/menu"
import Pinned from "../components/pinned"
import BlogList from "../components/blogList"
import Article from "../components/article"
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";

const inter = Inter({ subsets: ["latin"] });

const client = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/clcogbmkd0uq001uh3ypxhqxf/master")
const QUERY = gql`
query Posts {
  posts {
    id,
		title,
    datePublished,
    category,
    description,
    content{
      html
    },
    time,
    author{
      name,
      avatar{
        url
      }
    },
    coverimg{
      url
    }
  }
}
`

export async function getStaticProps(){
  const { posts } = await client.request(QUERY)
  return {
    props: {
      posts
    }
  }
}

export default function Home({posts}) {
  console.log('posts', posts)
  return (
    <>
      <Head>
        <title>南區大小事</title>
        <meta name="description" content="關於台中南區大大小小的一些事" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog">
        <Menu/>
        <Pinned/>
        <BlogList posts={posts}/>
        <Article/>
      </div>
    </>
  );
}
