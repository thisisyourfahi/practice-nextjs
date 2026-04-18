import Link from 'next/link';
import React from 'react';

const UserDetails = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json();

    return (
        <div className='min-h-screen shadow-lg p-4 flex justify-center items-center text-center'>
            <div>
                <h3 className='text-2xl font-bold'>{user.name}</h3>
                <p>{user.username}</p>
                <div className='text-left mt-4'>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>City: {user.address.city}</p>
                    <p>Works at: {user.company.name}</p>
                </div>
                <div className='space-x-4 mt-4'>
                    <Link href={'/'}>
                        <button className='btn btn-info btn-outline'>Home</button>
                    </Link>
                    <Link href={'/users'}>
                        <button className='btn btn-info btn-outline'>Users</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;