import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import {sanityClient, urlFor} from '../utils/sanity'
import { Post } from '../utils/typing'

interface Props{ 
  posts: [Post];
}
function Home({posts}: Props) {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
    </div>
  )
}

export default Home
export const getServerSideProps =async () => {
  const query = `*[_type=='post']{
    _id,
    title,
    description,
    author->{
      name,
      image
    },
    slug,    
    mainImage
  }`;
  const posts = await sanityClient.fetch(query);
  return {props:{posts}}
}
