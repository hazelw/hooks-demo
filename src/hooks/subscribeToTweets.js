import React, { useState, useEffect } from 'react';

const TwitterAPI = () => {
    subscribeToTweets(id, tweetReceived) {}
    unsubscribeFromTweets(id) {}
};

const useSubscribeToTweets = (id) => {
    const [ tweets, useTweets ] = useState([]);

    useEffect(() => {
        const tweetReceived = (tweet) => setTweets([...tweets, tweet]);

        TwitterAPI.subscribeToTweets(id, tweetReceived);

        return () => {
            TwitterAPI.unsubscribeFromTweets(id);
        }
    });
};
