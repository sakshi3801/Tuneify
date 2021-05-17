import './am.css'
import Player from '../Components/Player'
import birds from '../Sounds/birds.mp3'
import insect from '../Sounds/insect.mp3'


const Na = ()=>{        
    const arr = [{
        title: 'Birds chirping',
        audio: birds,
        tags: 'Nature, Birds, Morning, Water hole'
    },
    {
      title: 'Summer rural night ambience',
      audio: insect,
      tags: 'Nature, Insects, Frogs, Night'
    }
]
    return(    
        
        <>
        <h1>Nature</h1>
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

export default Na;