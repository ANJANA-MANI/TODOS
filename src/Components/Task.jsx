import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firbase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Task({i,display}) 
{
  const[newtask,setnewtask]=useState('')
  const[id,setId]=useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (i) => {
    setnewtask('');
  setShow(true);
  setId(i)
  }
const deletetask=async(i)=>{
console.log('delid',i);
await deleteDoc(doc(db, "tasks", `${i}`));
display()
  }

  const edittask=async()=>{
   console.log(newtask);
   console.log('id',id);
  await updateDoc(doc(db,"tasks",`${id}`), {
    name: newtask,
  });
  setnewtask('');
     handleClose();
     display()
  }  
  const updatestatus=async(i)=>{

  console.log('updating....');
  console.log('id',i);
 const result= await updateDoc(doc(db,"tasks",`${i}`), {
    
    status:i.status==='complete'?'incomplete':"complete",
   });
   console.log('result',result);
   display();
  }
  return (
    <>
        <Row className="mx-auto" style={{borderRadius:"7px",opacity:"0.9",height:"45px",width:"70vw",marginTop:"10px",backgroundImage:"url(https://png.pngtree.com/background/20210716/original/pngtree-simple-clean-line-background-picture-image_1356293.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",alignItems:"center",display:"flex",justifyContent:"center",textalign:"center"}}>
        <Col sm={12} lg={4} style={{}}>
        {i.name}
        </Col>
        <Col sm={12} lg={2}>
       {i.status ==='complete'? (<i class="fa-solid fa-check"></i>): (<i class="fa-solid fa-xmark"></i>)}
        </Col>
        <Col sm={12} lg={2}>
        <input type="checkbox"checked={i.status === 'complete'} onChange={()=>{updatestatus(i.id)}}/>
        </Col>
        <Col sm={12} lg={2}>
        <i class="fa-solid fa-pen-to-square"onClick={()=>{handleShow(i.id)}} ></i>
        </Col>
        <Col sm={12} lg={2}>
        <i class="fa-solid fa-trash" onClick={()=>{deletetask(i.id)}}></i>
        </Col>
       
    </Row>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={3} md={6} lg={12}>
              <input type="text" value={ newtask || " "} onChange={(e) => { setnewtask(e.target.value) }} className='form-control p-2 text-danger' placeholder='Enter the task' style={{ color: "orange" }} />
            </Col>
          </Row>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary"onClick={edittask}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Task