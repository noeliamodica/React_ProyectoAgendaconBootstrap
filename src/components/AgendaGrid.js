import { useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AgendaGrid (){

    const [title, setTitle]= useState('')
    const [agendados, setAgendados] = useState([])

  

    function handleChange (event){
        const value = event.target.value
        setTitle (value)
    }
   
    function handleSubmit (e){
        e.preventDefault();
        const newData ={
            id: crypto.randomUUID(),
            title: title,
            completed: false
        } 

        setAgendados ([...agendados, newData] )
    }


    return (
        <div className="form-control">
            <form onSubmit={handleSubmit}>
              <input className="form-control" onChange={handleChange}  value={title}/>
              <input className="form-control"
                      type="submit" 
                      value="Agendar"
                      onClick={handleSubmit}/>
              
            </form>

            <div>
                {agendados.map((item) =>(
                    <div key = {item.id} item={item}>
                        
                        {item.title}
                    </div>
                ))
                
                }
            </div>
        </div>
    )
}
