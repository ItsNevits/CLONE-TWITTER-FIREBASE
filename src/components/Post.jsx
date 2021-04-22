import React from "react";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = ({ name, text, avatar, imagePost }) => {
  return (
    <div id='container-post'>
      <div className='post-avatar'>
        <img src={avatar} alt='avatar' />
      </div>

      <div className='post-body'>
        <div>
          <div className='post-name'>
            <h3>{name}</h3>
            <span>
              <VerifiedUserIcon className='post-icon' /> @{name}
            </span>
          </div>

          <div className='description'>
            <p>{text}</p>
          </div>

          {imagePost ? (
            <div className='img-post'>
              <img src={imagePost} alt='avatar' />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Post;
