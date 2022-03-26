import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import Navbar from "../../components/Navbar";
import { sanityClient, urlFor } from "../../utils/sanity";
import { Post } from "../../utils/typing";

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    return (
        <main>
            <Navbar />
            <img className="w-full h-40 object-cover"
                src={urlFor(post.mainImage).url()} alt={post.title} />

            <article className="max-w-3xl mx-auto p-5">
                {/* Title section */}
                <h1 className="text-7xl mt-10 mb-3 font-serif font-bold">
                    {post.title}
                </h1>
                <h2 className="first-letter:font-normal first-letter:text-3xl first-letter:font-serif text-xl  font-light text-gray-500 mb-10">
                        "{post.description}"
                </h2>




                {/* Content section */}
                <div>
                    <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.body}
                        className="space-y-3 "
                        serializers={{
                            h1: (props: any) => (<h1 className="text-2xl font-bold my-5"{...props} />),
                            h2: (props: any) => (<h2 className="text-xl font-bold my-5"{...props} />),
                            h3: (props: any) => (<h3 className="text-lg font-bold my-5"{...props} />),
                            li: ({ children }: any) => (<li className="ml-4 list-disc">{children} </li>),
                            link: ({ href, children }: any) => (<a href={href} className="text-blue-600 font-bold hover:underline">{children}</a>),
                        }}
                    />

                </div>
                {/* Author section */}
                <div className="flex items-center space-x-5 mt-5 flex-col">
                    <img className="h-12 w-12 rounded-full object-cover"
                        src={urlFor(post.author.image).url()} alt={post.author.name} />
                    <div className="text-sm font-extralight flex-col items-center text-center">
                        <p className="text-base pb-1 ">
                            By <span className="text-green-600 font-normal">{post.author.name}</span>

                        </p>
                        <p>
                            Publish on {new Date(post._createdAt).toLocaleString()}
                        </p>
                    </div> 
                </div>
            </article>

        </main>
    )
};

export default Post;
// Get the path of the post
export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug {current}
    }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current //Link to the post = /post/:slug
        }
    }));

    return {
        paths,
        fallback: 'blocking' //If the user is offline, the page will be loaded asynchronously
    };
};
// Get the data of the post
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        description,
        author->{
            name,
            image
        },
        slug,
        mainImage,
        body
    }`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if (!post) { //If the post doesn't exist, redirect to the 404 page
        return {
            notFound: true,
        };
    };

    return { //If the post exists, return the data
        props: {
            post
        },
        revalidate: 60, //Refresh the page every 60 seconds

    };
};
