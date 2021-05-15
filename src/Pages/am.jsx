import React /*, { useState }*/ from 'react'
import './am.css'
import Player from '../Components/Player'
import restCrowd from '../Sounds/Restaurant Crowd 1.mp3'
import cityTraffic from '../Sounds/City traffic.mp3'
import office from '../Sounds/Office.mp3'
import bar from '../Sounds/bar.mp3'
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
// import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const Am = ()=>{        
    const arr = [{
        title: 'Restaurant Crowd 1',
        audio: restCrowd
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

    // const [playing, setPlaying] = useState(false)
    // const audioRef = React.useRef(null)

    // const togglePlay = ()=> setPlaying(prev=> !prev)

    // React.useEffect(()=>{
    //     if(audioRef && audioRef.current)
    //     {
    //         if(playing)
    //         audioRef.current.play()
    //         else
    //         audioRef.current.pause()
    //     }
    // }, [playing])

    return <div className="part">
        {arr.map(a=><Player
            audio = {a.audio}
            title = {a.title}
            key = {a.title}
            />)}
    </div>
}

export default Am;