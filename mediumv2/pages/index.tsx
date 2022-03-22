import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import {sanityClient, urlFor} from '../utils/sanity'
import { Post } from '../utils/typing'

interface Props{ 
  posts: [Post];
}

export default function Home({posts}: Props) {
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      {/* Post */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map(post =>(
          <Link key={post._id} href="`/post/[id]`" as={`/post/${post.slug.current}`}>
            <div className="group">
              <img src={
                urlFor(post.mainImage).url()} alt={post.title} className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out " />
              <div className="flex justify-between p-5 bg-white align-items-center">
                <div>
                  <p>{post.title}</p>
                  <p>{post.description}</p>
                  <p className="font-medium font-serif italic text-right">By {post.author.name}</p>
                </div>
                <div> 
                  <img className="h-12 w-12 rounded-full"
                  src ={
                    urlFor(post.author.image).url()
                  } alt={post.author.name}/>
                </div>
              </div>
            </div>
          </Link>
            
        ))}
      </div>
    </div>
  )
}


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
