import './am.css'
import Player from '../Components/Player'
import coffee from '../Sounds/coffee.mp3'
import coral from '../Sounds/coral.mp3'
import stardust from '../Sounds/stardust.mp3'
import begins from '../Sounds/begins.mp3'


const We = ()=>{        
    const arr = [{
        title: 'Bedtime after a coffee',
        audio: coffee,
        tags: 'Lofi, chill, coffee'
    },
    {
      title: 'Coral',
      audio: coral,
      tags: 'Lofi, chill, relaxing'
    },
    {
        title: 'Stardust',
        audio: stardust,
        tags: 'Lofi, chill, relaxing'
    },
    {
        title: 'And so it begins',
        audio: begins,
        tags: 'Lofi, chill, calm'
    }
]
    return(    
        
        <>
        <h1>Lofi chill</h1>
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