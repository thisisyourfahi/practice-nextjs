import React from 'react';
import UserCard from './usercard/UserCard';

const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div className="min-h-screen bg-gray-100-50 flex p-10 gap-8 justify-center">
            <div className='shadow-lg p-4'>
                <h2 className="text-2xl">Welcome to the users page!</h2>
            </div>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-lg p-4'>
                {
                    users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default Users;