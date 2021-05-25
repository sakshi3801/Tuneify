import './am.css'
import Player from '../Components/Player'
import birds from '../Sounds/birds.mp3'
import insect from '../Sounds/insect.mp3'
import forest from '../Sounds/forest.mp3'
import waterfall from '../Sounds/waterfall.mp3'
import african from '../Sounds/african.mp3'

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
    },
    {
      title: 'Ambience by river',
      audio: forest,
      tags: 'Nature, River, Birds, Forest'
    },
    {
        title: 'Small Waterfall, birds singing',
        audio: waterfall,
        tags: 'Nature, Waterfall, Birds, Life'
      },
      {
          title: 'African bush ambience by river',
          audio: african,
          tags: 'Nature, River, Birds, Life'
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