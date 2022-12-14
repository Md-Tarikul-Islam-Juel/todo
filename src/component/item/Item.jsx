import React, { useState } from 'react';
import { FaCheckCircle, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './Item.css';

function Item(props) {
    let [checked,setChecked]=useState(false)
    let [background,setBackground]=useState(false)
    let [lineThrough,setLineThrough]=useState(false)

    function handleDelete(id){
        props.collectChildDataFromItem(id)
    }

    function editInput(id){
        props.collectChildDataFromItemEdit(id,true)
        setBackground(!background)
    }

    function handleChecked(id){
        setChecked(!checked)
        props.collectChildDataFromItemEdit(id,false)
    }
    function handleCheckedfalse(id){
      setChecked(false)
      props.collectChildDataFromItemEdit(id,false)
    }
    function handleLineThrough(){
      setLineThrough(!lineThrough)
    }
        
  return (
    <>
    <div className='row item-row'>
            <div className='col-1'>
                <p className='id'>{props.id}</p>
            </div>
            {lineThrough?(<div className='col-7 overFlowControl'>
                <p className='lineThrough'>{props.items}</p>
            </div>):(<div className='col-7 overFlowControl'>
                <p>{props.items}</p>
            </div>)
            }
            
            {checked?(<>
              <div className='col-1 margin_left'>
                <p> </p>
              </div>
              <div className='col-1'>
                <p><FaCheckCircle style={{color:'red'}} className="icon" onClick={()=>{handleChecked(props.id);handleLineThrough()}}/></p>
              </div>
            </>):(<>
                    <div className='col-1 margin_left'>
                        <p><FaCheckCircle className="icon" onClick={()=>{handleChecked(props.id);handleLineThrough()}}/></p>
                    </div>
                    <div className='col-1'>
                        <p><FaEdit onClick={()=>editInput(props.id)}className="icon"/></p>
                    </div>
                    </>)
                    }
                    <div className='col-1'>
                        <p><MdDelete onClick={()=>{handleDelete(props.id);handleCheckedfalse(props.id)}} className="icon"/></p>
                    </div>
            </div>  
    </>
  )
}

export default Item