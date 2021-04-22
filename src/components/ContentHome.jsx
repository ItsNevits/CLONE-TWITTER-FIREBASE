import React, { useEffect, useState } from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";

import { db } from "../firebaseConfig";

const ContentHome = () => {
  const [tweets, setTweets] = useState([]);

  const getPost = () => {
    db.collection("tweets")
      .orderBy("timestamp", "desc")
      .onSnapshot((res) => {
        const docs = [];

        res.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setTweets(docs);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div id='container-content'>
      <div className='tittle'>
        <h2>Home</h2>
      </div>

      <TweetBox />

      {tweets.map((tweet) => (
        <Post
          key={tweet.id}
          name={tweet.name}
          text={tweet.text}
          avatar={tweet.avatar}
          imagePost={tweet.imagePost}
        />
      ))}
    </div>
  );
};

export default ContentHome;
