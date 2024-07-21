import { useState } from 'react';
import { CDBRating, CDBContainer } from 'cdbreact';
import { BsDownload } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalUlasan(props) {
   const {show, handleClose} = props;
   //    state Button Download
   const [ disableButton = true, setDisableButton ] = useState();
    //    State Textarea Ulasan
   const [ valueUlasan, setValueUlasan ] = useState('');
    //    Event Handler Textarea ketika di Input/mengalami perubahan
   const handleOnChange = (event) => {
       setValueUlasan(event.target.value);
    //    Jika value length textarea > 3 maka button enable
      if(valueUlasan.length >= 4){
       setDisableButton(false);
      } else if (valueUlasan.length < 4){
        setDisableButton(true);
      }
   }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rating & Ulasan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>  
                <CDBRating iconRegular fillClassName='text-warning' containerClassName='d-flex flex-row justify-content-center fs-3'/>          
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Alasan Download</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleOnChange} value={valueUlasan}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" disabled={disableButton} onClick={handleClose}>
          <BsDownload /> Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUlasan;