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
        tags: 'Ambience, restaurant, crowd'
    },
    {
      title: 'City traffic',
      audio: cityTraffic,
      tags: 'Ambience, city, traffic'
    },
    {
        title: 'Office',
        audio: office,
        tags: 'Ambience, office wallla, phone rings'
    },
    {
        title: 'Bar/Pub ambience',
        audio: bar,
        tags: 'Ambience, pub, music, dance'
    }
]
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
            tags={user.tags}
          /></li>
        ))}
        </ol>
            

        </div>
        </>

    )
}

export default Am;