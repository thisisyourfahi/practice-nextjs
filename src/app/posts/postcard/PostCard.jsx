import Link from 'next/link';
import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className='shadow-md p-4 flex flex-col'> 
            <h3 className='text-2xl font-bold'>{post.title}</h3>
            <p>{post.body}</p>
            <Link className='mt-auto' href={`/posts/${post.id}`}>
                <button className='btn w-full btn-accent btn-outline'>Show Details</button>
            </Link>
        </div>
    );
};

export default PostCard;