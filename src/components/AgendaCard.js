import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export function AgendaCard({item, onUpdate}){

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
            <input type='text' className="todoInput" onChange={handleChange} value={newValue} />
            <buttton className="p-1 " onClick={handleClickUpdate}>Editar</buttton>
            </form>
        )
    }

   

    function TodoElement(){


        return(
            <div>
                <span> {item.title} </span>
                 <button className="button" onClick={ ()=> setEdit(true) }>Edit</button>
                <buttton className="text-danger ">Eliminar</buttton>
            </div>
        )

    }

    
    return(
        <div className="flex bg-light border shadow p-2 mb-3 bg-body rounded  ">
            
            {
                edit ? <FormEdit />
                : <TodoElement />
            }            
            
        </div>

 )
 }
