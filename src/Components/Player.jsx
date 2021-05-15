import React, { useState } from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import './Player.css'
  
const Player = (props)=>{

    const [playing, setPlaying] = useState(false)
    const audioRef = React.useRef(null)

    const togglePlay = ()=> setPlaying(prev=> !prev)

    React.useEffect(()=>{
        if(audioRef && audioRef.current)
        {
            if(playing)
            audioRef.current.play()
            else
            audioRef.current.pause()
        }
    }, [playing])

    return(
        <>
        
        <audio id='player' src={props.audio} ref={audioRef} />
        <div className='playPause' onClick={togglePlay}>
        {playing ?<PauseCircleFilledIcon fontSize='large' className='button'/>: <PlayCircleFilledIcon fontSize='large' className='button' />}   
        </div>
        <h3>{props.title}</h3>
        </>
    )

}

export default Player