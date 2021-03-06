import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

export function AccountModalDelete(props) {
    const [show, setShow] = useState(false);
  
    const data={
      id_account:props.data.id_account,
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async (event) => {
        event.preventDefault()
        const payload = {
        id_account:data.id_account,
        }
        const config = {
        method: 'delete',
        url: 'http://localhost:5000/user/deleteAccount',
        withCredentials: true,
        data: payload,
        }
        const res = await axios(config)
        window.location.href = window.location.href
    
    }
    return (
      <>
        <Button variant="danger" onClick={handleShow} className="btn btn-primary btn-sm" style={{marginRight: '5px'}} >
            <AiFillDelete />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="textarea"
                  disabled
                  value="Bạn có chắc chắn muốn xóa tài khoản ?"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  