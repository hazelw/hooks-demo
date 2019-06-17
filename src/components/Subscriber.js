import React, { useState, useEffect } from 'react';

const TwitterAPI = () => {
    subscribeToTweets(id, tweetReceived) {}
    unsubscribeFromTweets(id) {}
};

const SubscribeToTweets = ({ id }) => {
    const [ tweets, setTweets ] = useState([]);
    
    useEffect(() => {
        const tweetReceived = (tweet) => setTweets([...tweets, tweet]);

        TwitterAPI.subscribeToTweets(id, tweetReceived);

        return () => {
            TwitterAPI.unsubscribeFromTweets(id);
        }
    });
};
