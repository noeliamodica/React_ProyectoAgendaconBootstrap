
import 'bootstrap/dist/css/bootstrap.min.css';

export function AgendaCard({item}){
    return(
        <div className="flex bg-light border shadow p-2 mb-3 bg-body rounded  ">
            <form >
            <input  type="checkbox" className='p-1'/>
            <span className="flex p-1 ml-2" value={item} > {item.title}  </span>
            <span className="text-danger ">Eliminar</span>
            </form>
        </div>

 )
 }
