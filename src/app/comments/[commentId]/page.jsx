import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {
    const {commentId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    const comment = await res.json();
    console.log(comment);
    return (
        <div className='min-h-screen shadow-lg p-4 flex flex-col justify-center items-center'>
            <div>
                <h3 className='text-2xl font-bold mb-2'>Title: {comment.name}</h3>
                <p>Body: {comment.body}</p>
            </div>
            <div className='mt-4 space-x-4'>
                <Link href={`/posts/${comment.postId}`}>
                    <button className='btn btn-warning btn-outline'>Which Post&apos;s Comment?</button>
                </Link>
                <Link href={'/'}>
                    <button className='btn btn-info btn-outline'>Home</button>
                </Link>
                <Link href={'/comments'}>
                    <button className='btn btn-accent btn-outline'>Comments</button>
                </Link>
            </div>
        </div>
    );
};

export default page;