import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    const { postId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();
    return (
        <div className='min-h-screen shadow-lg p-4 flex flex-col justify-center items-center'>
            <div>
                <h3 className='text-2xl font-bold mb-2'>Title: {post.title.toUpperCase()}</h3>
                <p>Body: {post.body}</p>
            </div>
            <div className='mt-4 space-x-4'>
                <Link href={`/users/${post.userId}`}>
                    <button className='btn btn-info btn-outline'>User Info</button>
                </Link>
                <Link href={'/'}>
                    <button className='btn btn-accent btn-outline'>Home</button>
                </Link>
                <Link href={'/posts'}>
                    <button className='btn btn-warning btn-outline'>Posts</button>
                </Link>
            </div>
        </div>
    );
};

export default page;