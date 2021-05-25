import './am.css'
import Player from '../Components/Player'
import tereLiye from '../Sounds/tere liye.mp3'
import chandChupa from '../Sounds/chand chupa.mp3'
import ekDin from '../Sounds/ek din.mp3'
import aankhoMein from '../Sounds/aankho mein teri.mp3'
import ekAjnabee from '../Sounds/ek ajnabee.mp3'
import pehlaNasha from '../Sounds/pehla nasha.mp3'

const We = ()=>{        
    const arr = [{
        title: 'Tere Liye',
        audio: tereLiye,
        tags: 'Romance, Veer-Zaara, Lata Mangeshkar'
    },
    {
      title: 'Chand Chupa Badal Mein',
      audio: chandChupa,
      tags: 'Romance, Udit Narayan, Alka Yagnik'
    },
    {
        title: 'Ek Din Aap Yun',
        audio: ekDin,
        tags: 'Romance, Kumar Sanu, Alka Yagnik'
    },
    {
        title: 'Aankho Mein Teri',
        audio: aankhoMein,
        tags: 'Romance, Om Shanti Om, K.K.'
    },
    {
        title: 'Ek Ajnabee Haseena Se',
        audio: ekAjnabee,
        tags: 'Romance, Kishore Kumar, Evergreen'
      },
      {
          title: 'Pehla Nasha',
          audio: pehlaNasha,
          tags: 'Romance, Udit Narayan, Sadhana Sargam, 90s'
      }
]
    return(    
        
        <>
        <h1>Romance</h1>
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