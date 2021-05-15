import React, { useState } from 'react'
import './am.css'
import Player from '../Components/Player'
import restCrowd from '../Sounds/Restaurant Crowd 1.mp3'
import cityTraffic from '../Sounds/City traffic.mp3'
import office from '../Sounds/Office.mp3'
import bar from '../Sounds/bar.mp3'


const Am = ()=>{        
    const arr = [{
        title: 'Restaurant Crowd 1',
        audio: restCrowd,
        
    },
    {
      title: 'city traffic',
      audio: cityTraffic
    },
    {
        title: 'Office',
        audio: office
    },
    {
        title: 'Bar/Pub ambience',
        audio: bar
    }
]

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
    console.log(arr[2].audio)
    return(    
        
        <>
        <h1>Ambience</h1>
        <div className='part'>
            <ol>
            {arr.map((user) => (
            <li>
            <Player
            title={user.title}
            audio={user.audio}
            
          /></li>
        ))}
        </ol>
            

        </div>
        </>

    )
}

export default Am;