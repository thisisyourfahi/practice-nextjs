import React from 'react';
import UserCard from './usercard/UserCard';

const Users = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-lg p-4'>
            {
                users.map(user => <UserCard key={user.id} user={user}></UserCard>)
            }
        </div>
    );
};

export default Users;