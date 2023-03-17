import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export function AgendaCard({item, onUpdate, onDelete}){

    const [edit, setEdit] = useState (false);


    function FormEdit(){
        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }
    
        function handleChange (e){
            const value = e.target.value
            setNewValue(value)
        }

        function handleClickUpdate(){
            onUpdate (item.id, newValue);
            setEdit(false);
        }

        return (
            <form onSubmit={handleSubmit}>

            <input  type='text'  onChange={handleChange} value={newValue} />
            <buttton className="p-1 " onClick={handleClickUpdate}>Editar</buttton>
            </form>
        )
    }

   

    function TodoElement(){


        return(
            <div  className="form-control"> 
                
                <span  className="form-control"> {item.title} </span>
                 <button className="button" onClick={ ()=> setEdit(true) }>Edit</button>
                 <buttton className="button float-rigth" onClick={ (e)=> onDelete (item.id)}>Eliminar</buttton>
            </div>
        )

    }

    
    return(
        <div className="flex bg-light border shadow p-2 mb-1 bg-body rounded">
            
            {
                edit ? <FormEdit />
                : <TodoElement />
            }            
            
        </div>

 )
 }
