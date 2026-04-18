import Link from 'next/link';
import React from 'react';

const UserCard = ({user}) => {
    return (
        <div className='shadow-md p-4 flex flex-col'> 
            <h3 className='text-xl'>{user.name}</h3>
            <p>{user.username}</p>
            <Link className='mt-auto' href={`/users/${user.id}`}>
                <button className='btn w-full btn-accent btn-outline'>Show Details</button>
            </Link>
        </div>
    );
};

export default UserCard;