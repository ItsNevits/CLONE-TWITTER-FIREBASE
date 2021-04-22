import React, { useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../firebaseConfig";

const TweetBox = () => {
  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const usuario = useSelector((store) => store.usuario.user);

  const [nombreUsuario, setNombreUsuario] = useState(usuario.displayName);
  const [idUser, setIdUser] = useState(usuario.email);
  const [userImg, setUserImg] = useState(usuario.photoURL);

  const setTweet = async (e) => {
    e.preventDefault();

    if (tweetMsg.length < 5) {
      return alert("debes escribir mas de 5 caracteres");
    }
    if (tweetMsg.length > 300) {
      return alert("debes escribir menos de 300 caracteres");
    } else {
      await db.collection("tweets").doc().set({
        name: nombreUsuario,
        text: tweetMsg,
        timestamp: Date.now(),
        avatar: userImg,
        imagePost: tweetImg,
        idUser: idUser,
      });

      console.log(tweetImg);

      setTweetMsg("");
      setTweetImg("");
    }
  };

  const handleSubmit = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref(`/post/${file.name}`).put(file);

    console.log(file);

    storageRef.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("post")
          .child(file.name)
          .getDownloadURL()
          .then((url) => setTweetImg(url));
      }
    );
  };

  return (
    <div className='container-inputs'>
      <form>
        <div className='inputs'>
          <img src={userImg} alt='avatar' />
          <input
            type='text'
            placeholder='En que estas pensando?'
            onChange={(e) => setTweetMsg(e.target.value)}
            value={tweetMsg}
          />
        </div>
        <div className='input-files'>
          <input type='file' className='input-file' onChange={handleSubmit} />
          <button className='btn-tweet' type='submit' onClick={setTweet}>
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
