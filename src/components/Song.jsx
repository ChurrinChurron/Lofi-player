import { useState } from 'react';
import './Song.css';

const Song = ({cover, title, artist}) => {

  const [like, setLike] = useState(false);

  return (
    <div className="data__track">
        <div className="list__song">
            <img src={cover} alt="Cover" />
            <div className="data__name">
                <h5>{title}</h5>
                <h6>{artist}</h6>
            </div>
        </div>
        <div className="song__option">
          <button onClick={() => setLike(!like)}><i className={like ? "like fa-solid fa-heart" : "like fa-regular fa-heart"}></i></button>
          <button><i className="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
    </div>
  )
}

export default Song