import './Videoplayer.css'
import video from '../../assets/edusity_assets/index.html.mp4'
import { useRef } from 'react';

const Videoplayer = ({playState, setPlayState}) => {

   const player = useRef(null);
   const closeplayer = (e)=>{
    if(e.target === player.current){
     setPlayState(false)
    }
   }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
    <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Videoplayer
