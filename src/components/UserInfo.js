import React from 'react';
import { useSubscribeToTweets } from '../hooks/subscribeToTweets';

const UserInfo = ({ id }) => {
    const tweets = useSubscribeToTweets(id);

    return (
        <div>
            {tweets.map((tweet) => (<div>
                <span><img src={tweet.user.profilePicture} /></span>
                <span>{tweet.user.name}</span>
                <span>{tweet.user.description}</span>
            </div>))}
        </div>
    );
};

export default UserInfo;
