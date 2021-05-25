import './am.css'
import Player from '../Components/Player'
import bombay from '../Sounds/bombay.mp3'
import radhaKrishna from '../Sounds/radhaKrishna.mp3'
import teriMitti from '../Sounds/teri mitti.mp3'
import aeMere from '../Sounds/ae mere.mp3'
 

const Flu = ()=>{        
    const arr = [{
        title: 'Bombay Theme',
        audio: bombay,
        tags: 'Flute, Bombay Theme, A R Rehman, Peace'
    },
    {
      title: 'Radha Krishna Flute',
      audio: radhaKrishna,
      tags: 'Flute, Radha-Krishna, Love'
    },
    {
      title: 'Teri Mitti',
      audio: teriMitti,
      tags: 'Flute, Patriotic, Kesari'
    },
    {
      title: 'Ae Mere Watan Ke Logon',
      audio: aeMere,
      tags: 'Flute, Patriotic'
    }

]
    return(    
        
        <>
        <h1>Flute</h1>
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

export default Flu;