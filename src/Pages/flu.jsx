import './am.css'
import Player from '../Components/Player'
import bombay from '../Sounds/bombay.mp3'
import radhaKrishna from '../Sounds/radhaKrishna.mp3'



const We = ()=>{        
    const arr = [{
        title: 'Bombay Theme',
        audio: bombay,
        tags: 'Flute, Bombay Theme, A R Rehman, Peace'
    },
    {
      title: 'Radha Krishna Flute',
      audio: radhaKrishna,
      tags: 'Flute, Radha-Krishna, Love'
    }
]
    return(    
        
        <>
        <h1>Mythology</h1>
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

export default We;