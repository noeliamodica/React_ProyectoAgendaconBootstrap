
import 'bootstrap/dist/css/bootstrap.min.css';

export function AgendaCard({item}){
    return(
        <div className="flex">
            <form>
            <input type="checkbox" className='p-1'/>
            <span value={item} > {item.title} </span>
            <input 
             type="submit" />
          
            <span className='text-danger'>Eliminar</span>
            </form>
        </div>

 )
 }
