import React from 'react';
import { FaCheckCircle, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './Item.css';

function Item(props) {
    function handleDelete(id){
        props.collectChildDataFromItem(id)
    }

    function editInput(id){
        props.collectChildDataFromItemEdit(id,true)
    }
        
  return (
    <>
        <div className='row item-row'>
            <div className='col-md-1'>
                <p>{props.id}</p>
            </div>
            <div className='col-md-8'>
                <p>{props.items}</p>
            </div>
            <div className='col-md-1'>
                <p><FaCheckCircle/></p>
            </div>
            <div className='col-md-1'>
                <p><FaEdit onClick={()=>editInput(props.id)}/></p>
            </div>
            <div className='col-md-1'>
                <p><MdDelete onClick={()=>handleDelete(props.id)}/></p>
            </div>
        </div>
    </>
  )
}

export default Item