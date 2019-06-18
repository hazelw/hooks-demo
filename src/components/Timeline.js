import React from 'react';
import { useSubscribeToTweets } from '../hooks/subscribeToTweets';

const Timeline = ({ id }) => {
    const tweets = useSubscribeToTweets(id);

    return (
        <div>
            {tweets.map((tweet) => (<div>
                <span>{tweet.user.name}</span>
                <span>{tweet.text}</span>
            </div>))}
        </div>
    );
};

export default Timeline;
