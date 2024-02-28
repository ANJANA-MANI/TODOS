import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/to-do-list.png';
import { Col, Row } from 'react-bootstrap';
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firbase';
import { getDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';

function Todo() {
  const [task, settask] = useState('')
  const [data, setdata] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const generateCustomId = () => {
    return uuidv4();
  };
  useEffect(() => {
    display();
  }, [])
  const handletask = async () => {


    // Add a new document in collection "cities"
    await setDoc(doc(db, "tasks", `${Date.now()}`), {
      id: Date.now(),
      name: task,
      status: "incomplete"
    });

    handleClose();
    settask('');
    display();
  }

  const display = async () => {
    const newData = [];
    const querySnapshot = await getDocs(collection(db, "tasks"));
    
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      newData.push(doc.data());

    });
    setdata(newData)
   
  }


  return (
    <div style={{backgroundImage:'url(https://cdn1.vectorstock.com/i/1000x1000/13/40/todo-list-seamless-pattern-universal-background-vector-7561340.jpg)'}}>
      <label htmlFor=""></label>
      <Row>
        <Col sm={3} md={6} lg={12}>
          <img src={logo} alt="" srcset="" style={{ height: "80px", width: "80px", objectFit: "cover", cursor: "pointer" }} onClick={handleShow} />
        </Col>
      </Row>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={3} md={6} lg={12}>
              <input type="text" value={task || ""} onChange={(e) => { settask(e.target.value) }} className='form-control p-2 text-danger' placeholder='Enter the task' style={{ color: "orange" }} />
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handletask}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <div className=""style={{justifyContent:"center"}}>
        {data.map((i) => <Task key={task.id} i={i} display={display} />
        
      )}
      </div>


    </div>
  )
}

export default Todo