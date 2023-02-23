import React, {useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { entry,del,update } from '../redux/state/ToDoSlice';

const ToDo = () => {
  const dispatch=useDispatch();
  
    const val=useSelector((state)=>state.todo.value);

    const [name,setName]=useState("")
    const [title,setTitle]=useState("")
    const [index,setIndex]=useState("")

    const handleUpdate=(event)=>{
        
        event.preventDefault();
        const name=event.target.name.value;
        const title=event.target.title.value;
        // console.log(title,name);
        dispatch(update({title,name,index}));
        
    }

    const updateValue=(title,name,index)=>{
        setName(name);
        setTitle(title);
        setIndex(index);
        
    }

    const handleClick=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const title=event.target.title.value;
        // console.log(title,name);
        dispatch(entry({title,name}));
    }
    return (
        <div className='d-flex justify-content-center align-item-center'>
            <section className='w-50'>
            <h3 className='text-center my-4'>Task Of The Day</h3>
            {
                val?.map((value,index)=>{
                    return <div key={index} className="p-4 shadow-lg m-4" >
                                <div className='d-flex justify-content-between'>
                                <h3 className='text-lg'>{value.title}</h3>
                                <button onClick={()=>{dispatch(del(index))}} className='btn btn-danger me-2 p-1'>Delete</button>
                                <button onClick={()=>updateValue(value.title,value.name,index)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                                </div>
                                <p>{value.name}</p>
                        </div>
                    
                })
            }
            <form onSubmit={handleClick} className="m-4">
                    <label>Title: </label>
                    <input required className='me-3 ms-2' placeholder='Title' type="text" name="title"/>
                    <label>Description: </label>
                    <input required className='ms-2' placeholder='Task' type="text" name="name"/>
                  <br></br>
                  <button className='btn btn-primary my-3' type="submit">Submit</button>
            </form>

            </section>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
           <form onSubmit={handleUpdate} className="m-4">
                    <label>Title: </label>
                    <input required defaultValue={title} className='me-3 ms-2' placeholder='Title' type="text" name="title"/>
                    <br></br>
                    <label>Description: </label>
                    <input required defaultValue={name} className='ms-2' placeholder='Task' type="text" name="name"/>
                  <br></br>
                  <button className='btn btn-primary my-3' type="submit">Submit</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ToDo;