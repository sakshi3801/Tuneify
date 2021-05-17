import './am.css'
import Player from '../Components/Player'
import beach from '../Sounds/beach.mp3'
import beach1 from '../Sounds/beach1.mp3'


const Wav = ()=>{        
    const arr = [{
        title: 'Beach sea waves',
        audio: beach,
        tags: 'Waves, Beach, Solitude'
    },
    {
        title: 'Beach, hum of voices, waves, playing',
        audio: beach1,
        tags: 'Waves, Beach, People, Play'
    }
]
    return(    
        
        <>
        <h1>Waves</h1>
        <div className='part'>
            <ol>
            {arr.map((user) => (
            <li>
            <Player
            title={user.title}
            audio={user.audio}
            tags={user.tags}
          /></li>
        ))}
        </ol>
        
        </div>
        </>

    )
}

export default Wav;