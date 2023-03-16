import { useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgendaCard } from './AgendaCard';

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

    function handleUpdate(id, value){
        const temp =[...agendados];
        const item = temp.find(item => item.id ===id );
        item.title = value
        setAgendados(temp)
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
                {agendados.map(item =>(
                        <div className='p-2'> 
                        <AgendaCard  key={item.id} item={item} onUpdate={handleUpdate} />
                        </div>
                    
                ))
                
                }
            </div>
        </div>
    )
}
