import './am.css'
import Player from '../Components/Player'
import ganesh from '../Sounds/ganesh.mp3'
import krishna from '../Sounds/aarti kunj bihari ki.wav'
import hanuman from '../Sounds/hanuman.mp3'
import mata from '../Sounds/mata.mp3'


const We = ()=>{        
    const arr = [{
        title: 'Ganesh Aarti',
        audio: ganesh,
        tags: 'Mythology, God, Ganesha, Hindu'
    },
    {
      title: 'Aarti Kunj Bihari Ki',
      audio: krishna,
      tags: 'Mythology, God, Krishna, Hindu'
    },
    {
        title: 'Hanuman Chalisa',
        audio: hanuman,
        tags: 'Mythology, God, Hanuman, Hindu'
    },
    {
        title: 'Mata Rani Aarti',
        audio: mata,
        tags: 'Mythology, God, Maata Rani, Hindu'
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