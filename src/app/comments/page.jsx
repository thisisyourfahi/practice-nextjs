import React from 'react';
import CommentCard from './commentcard/CommentCard';

const Comments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await res.json();

    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-lg p-4'>
            {
                comments.map(comment => <CommentCard key={comment.id} comment={comment}></CommentCard>)
}
        </div>
    );
};

export default Comments;