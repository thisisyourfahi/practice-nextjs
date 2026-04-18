import Link from 'next/link';
import React from 'react';

const CommentCard = ({ comment }) => {
    return (
        <div className='shadow-md p-4 flex flex-col'>
            <h3 className='text-2xl font-bold'>{comment.name.toUpperCase()}</h3>
            <p>{comment.body}</p>
            <Link className='mt-auto' href={`/comments/${comment.id}`}>
                <button className='btn w-full btn-info btn-outline'>Show Details</button>
            </Link>
        </div>
    );
};

export default CommentCard;