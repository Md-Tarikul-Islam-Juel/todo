import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Input.css';

function Input(props) {
  let [inputData,setInputData]=useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(inputData!==''){
      props.collectChildDataFromInput(inputData)
    }
    setInputData('')
  }

  function handleInputData(e){
    setInputData(e.target.value)
  }

  return (
    <>
      <Form className='form' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-9 input-div'>
              <Form.Group className="mb-3" controlId="formBasicEmail"> 
                  <Form.Control type="text" placeholder="Type your task"  className='input' value={inputData} onChange={handleInputData}/>
              </Form.Group>
          </div>
          <div className='col-md-3 btn-div'>
                <Button variant="primary" type="submit" className='btn btn-add-task'>
                Add task
                </Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default Input