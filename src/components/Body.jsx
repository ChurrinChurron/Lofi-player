import Song from "./Song";
import './Body.css';
import { useState } from "react";
import Telepath1 from "../assets/uno.webp";
import Telepath2 from "../assets/dos.webp";
import Telepath3 from "../assets/tres.webp";
import Telepath4 from "../assets/cuatro.webp";

const Body = () => {

const [follow, setFollow] = useState(false);
const [play, setPlay] = useState(true);

  return (
    <main>
        <div className="options">
            <h4>Popular</h4>
            <button id="follow" onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</button>
            <button id="shuffle"><i className="fa-solid fa-shuffle"></i></button>
            <button onClick={() => setPlay(!play)}><i className={play ? "play-pause fa-solid fa-play" : "play-pause fa-solid fa-pause"}></i></button>
        </div>
        <div className="playlist">
            <h4>Popular</h4>
            <Song cover={Telepath1}  
                  title="愛の瞬間" 
                  artist="t e l e p a t h テレパシー能力者"/>
            <Song cover={Telepath2}  
                  title="時間の波紋" 
                  artist="t e l e p a t h テレパシー能力者"/>
            <Song cover={Telepath3}  
                  title="あなたの愛、永遠に" 
                  artist="t e l e p a t h テレパシー能力者"/>
            <Song cover={Telepath4}  
                  title="アンドロメダ" 
                  artist="t e l e p a t h テレパシー能力者"/>
        </div>
    </main>
  )
}

export default Body