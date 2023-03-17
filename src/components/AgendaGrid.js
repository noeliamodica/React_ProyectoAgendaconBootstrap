import { useRef, useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { AgendaCard } from './AgendaCard';
import AgendaEmojis from './AgendaEmojis';

export default function AgendaGrid (){

    const [title, setTitle]= useState('')
    const [agendados, setAgendados] = useState([])
    const refInput = useRef(null);

  

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
        setTitle ("");
    }

    function handleUpdate(id, value){
        const temp =[...agendados];
        const item = temp.find(item => item.id ===id );
        item.title = value
        setAgendados(temp)
        
    }

    function handleDelete (id){
        const temp= agendados.filter(item => item.id !== id)
        setAgendados(temp)
    }


    return (
        <div className="form-control">
            <form onSubmit={handleSubmit}>
              <input className="form-control"  onChange={handleChange}  value={title}/>
              <input className="form-control"
                      type="submit" 
                      value="Agendar"
                      onClick={handleSubmit}/>
              
            </form>

            <div className="form-control">
                {agendados.map(item =>(
                        <div className="form-control"> 
                        <input className="mh-100 " ref={refInput}/>
                        <AgendaEmojis ref={refInput} />
                        <AgendaCard className="form-control" key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}  />
                        
                        </div>
                    
                ))
                
                }
            </div>
        </div>
    )
}
