import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdCancel } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

import './Edit.css';


function Edit(props) {
    //let [updateArray,setUpdateArray]=useState([])
    let [editEnableCondition,setEditEnableCondition]=useState(null)
    let [newItemText,setNewItemText]=useState('')

    // editIndex,editEnable,itemsArray,collectChildDataNewArrayFromEdit=props

    function handleUpdate(){
        let newItemArray=JSON.parse(JSON.stringify(props.itemsArray))
        setEditEnableCondition(true)
        newItemArray[props.editIndex]=newItemText
        
        setNewItemText('')
        if(newItemText!==''){
            props.collectChildDataNewArrayFromEdit(editEnableCondition,newItemArray)
        }
        
    }

    function handleCancle(){
        setEditEnableCondition(true)
        props.collectChildDataNewArrayFromEdit(editEnableCondition,props.itemsArray)
    }

    function handleInputEditData(e){
        setNewItemText(e.target.value)
    }

    function handleEditSubmit(e){
        e.preventDefault()
    }

  return (
    <>
        <Form className='form' onSubmit={handleEditSubmit}>
            <div className='row'>
                <div className='col-8 input-div'>
                    <Form.Group className="mb-3" controlId="formBasicEmail"> 
                        <Form.Control type="text" placeholder="Edit your task"  className='input-edit' value={newItemText} onChange={handleInputEditData}/>
                    </Form.Group>
                </div>
                <div className='col-2 btn-div'>
                    <Button variant="primary" type="submit" className='btn btn-update' onClick={handleUpdate}>
                        <TiTick/>
                    </Button>
                </div>
                <div className='col-2 btn-div'>
                    <Button variant="primary" type="submit" className='btn btn-cancle' onClick={handleCancle}>
                        <MdCancel/>
                    </Button>
                </div>
            </div>
        </Form>
    </>
  )
}

export default Edit