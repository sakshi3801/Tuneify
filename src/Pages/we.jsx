import './am.css'
import Player from '../Components/Player'
import rain from '../Sounds/rain.mp3'
import thunder from '../Sounds/thunder.mp3'
import wind from '../Sounds/wind.mp3'
import leaf from '../Sounds/leaf rain.mp3'
import cold from '../Sounds/cold.mp3'

const We = ()=>{        
    const arr = [{
        title: 'Rain Downpour',
        audio: rain,
        tags: 'Weather, rain, downpour, drips'
    },
    {
      title: 'Thunder with light rain',
      audio: thunder,
      tags: 'Weather, thunder, lightening, rain'
    },
    {
        title: 'Blustery wind in field',
        audio: wind,
        tags: 'Weather, wind, storm, nature'
    },
    {
        title: 'Rain falling on leafy trees',
        audio: leaf,
        tags: 'Weather, rain, trees, nature'
    },
    {
        title: 'Cold icy howling wind',
        audio: cold,
        tags: 'Weather, wind, cold'
    }
]
    return(    
        
        <>
        <h1>Weather</h1>
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