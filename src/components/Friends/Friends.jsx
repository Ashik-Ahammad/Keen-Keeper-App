import React, { use } from 'react';
import Friend from '../Friend/Friend';

const Friends = ({friendsPromise}) => {

    const friends = use(friendsPromise);

    return (
        <div className='w-10/12 mx-auto mb-10'>
            <h1 className='text-2xl font-bold mb-4'>Your Friends</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {friends.map(friend => (<Friend key={friend.id} friend={friend}></Friend>))}
            </div>
        </div>
    );
};

export default Friends;