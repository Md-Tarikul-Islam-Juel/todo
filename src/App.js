import React, { useState } from 'react'
import './App.css'
import Edit from './component/edit/Edit'
import Input from './component/input/Input'
import Item from './component/item/Item'

function App() {
  let [items,setItems]=useState(["mango","orange","bannana"])
  let [editEnable,setEditEnable]=useState(false)
  let [editIndex,setEditEndex]=useState(null)

  function handleChildData(childData){
    setItems((previousData)=>[...previousData,childData])
  }

  function handleDeleteIndex(id){
    let index=id-1
    let newItemArray=JSON.parse(JSON.stringify(items))
    newItemArray.splice(index,1)
    setItems(newItemArray)
  }

  function handleEditEnable(id,condition){
    let index=id-1
    setEditEndex(index)
    setEditEnable(condition)
  }

  function handleUpdatedArray(updatedCondition,updateArraydata){
    setItems(updateArraydata)
    setEditEnable(updatedCondition)
  }
  
  return (
    <>
      <div className='container'>
        <div className='row app-row'>
          <div className='col-10 offset-1'>
              {editEnable?<Edit editIndex={editIndex} editEnable={editEnable} itemsArray={items} collectChildDataNewArrayFromEdit={handleUpdatedArray}/>:<Input collectChildDataFromInput={handleChildData}/>}
              
              {items.map((item,index)=><Item key={index} id={index+1} items={item} collectChildDataFromItem={handleDeleteIndex} collectChildDataFromItemEdit={handleEditEnable}/>
              )} 
          </div>
        </div>
      </div>
    </>
  )
}

export default App