import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Friends from '../Friends/Friends';

const friendsPromise = fetch("/friends.json")
    .then(res => res.json());

const Home = () => {
    return (
        <>
            <Banner friendsPromise={friendsPromise}></Banner>
            <Suspense fallback={<div className='text-center text-gray-500'><span className="loading loading-infinity loading-xl text-info"></span></div>}>
                <Friends friendsPromise={friendsPromise}></Friends>
            </Suspense>
        </>
    );
};

export default Home;