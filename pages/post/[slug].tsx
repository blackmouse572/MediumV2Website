import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import Navbar from "../../components/Navbar";
import { sanityClient, urlFor } from "../../utils/sanity";
import { Post } from "../../utils/typing";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
interface IFormInput {
    _id: string;
    name: string;
    email: string;
    title: string;
    comment: string;
}
interface Props {
    post: Post;
}
function Post({ post }: Props) {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(() => {
            setSubmitted(true);

        }).catch(error => {
            setSubmitted(false);
            console.error(error);
        })
    };
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
                <h2 className="font-light text-gray-500 mb-10">
                    {post.description}
                </h2>
                <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
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
            <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

            {/* Comment input section */}
            {submitted ? (
                <div className="p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold">SUBMITTED !</h1>
                    <p className="text-xl font-bold text-black">Thank you for your feedback.</p>
                </div>
            ) : (
                <form className="p-5 max-w-2xl mx-auto mb-10 flex flex-col " onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-5xl max-w-xl font-bold mx-auto text-yellow-500">Love the blog ?</h3>
                    <h5 className="max-w-xl mx-auto my-5 ">Comments your thought below</h5>
                    <hr className="my-3" />
                    <input
                        {...register("_id")}
                        type="hidden"
                        name="_id"
                        value={post._id}
                    />
                    <label className="block mb-5">
                        <span>
                            Name
                        </span>
                        <div>{errors.name && (<span className="text-red-500">The name field is required</span>)}</div>
                        <input
                            {...register("name", { required: true })}
                            type="text" className="shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:ring focus:outline-none ring-yellow-500" placeholder="Enter your name (Ex. Doctor Trang)">

                        </input>
                    </label>
                    <label className="block mb-5">
                        <span>
                            Email
                        </span>
                        <div>{errors.name && (<span className="text-red-500">The email field is required</span>)}</div>
                        <input
                            {...register("email", { required: true })}
                            type="text" className="shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:ring focus:outline-none ring-yellow-500" placeholder="Enter your email (Ex. DoctorTrang@email.com)">

                        </input>
                    </label>
                    <label className="block mb-5">
                        <span>
                            Title
                        </span>
                        <div>{errors.name && (<span className="text-red-500">The title field is required</span>)}</div>
                        <input
                            {...register("title", { required: true })}
                            type="text" className="shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:ring focus:outline-none ring-yellow-500" placeholder="Enter the title">

                        </input>
                    </label>
                    <label className="block mb-5">
                        <span>
                            Comment
                        </span>
                        <div>{errors.name && (<span className="text-red-500">The comment field is required</span>)}</div>
                        <textarea
                            {...register("comment", { required: true })}
                            rows={8} className="shadow border rounded py-2 px-3 form-input mt-1 block w-full focus:ring focus:outline-none ring-yellow-500" placeholder="Enter your though or questions">

                        </textarea>

                    </label>
                    <input
                        className="bg-yellow-500 shadow 
                 hover:bg-yellow-300 rounded focus:shadow-outline
                  py-2 focus:outline-none text-white font-bold px-4  
                  cursor-pointer" type="submit">
                    </input>
                </form>
            )}
            {/* Comment section */}
            <div className="max-w-3xl mx-auto p-5">
                <h1 className="font-black text-3xl text-yellow-500  ">Comments</h1>
                <hr className="py-5"/>

                {post.comments.map((comment) => (
                    <div key={comment._id} className="border border-yellow-500 mb-5 rounded-xl px-5 py-5">
                        <div className="bg-yellow-500 text-white p-3 rounded-xl flex items-center space-x-5 mb-2">
                            <img className="max-h-8 rounded-full "
                                src="https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png"/>
                            <div className="flex flex-col">
                        
                                <h3 className="text-xl font-bold">{comment.name}</h3>
                                <p className="italic text-sm text-gray-500"> {comment._createdAt}</p>
                        
                            </div>
                            
                        </div>
                        <p className="">{comment.comment}</p>
                    </div>
                ))}

            </div>
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
    const query = `*[_type=='post' && slug.current == 'nothing-to-watch-here'][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
        'comments':*[
            _type=='comment' && 
            post._ref == ^._id &&
            approved == true
        ],
        slug,
        mainImage,
        description,
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
