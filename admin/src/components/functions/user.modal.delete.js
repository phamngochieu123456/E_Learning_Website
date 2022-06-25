import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

export function UserModalDelete(props) {
    const [show, setShow] = useState(false);
  
    const data={
      id_user:props.data.id_user,
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async (event) => {
        event.preventDefault()
        const payload = {
            id_user:data.id_user,
        }
        const config = {
        method: 'delete',
        url: 'http://localhost:5000/user/deleteUser',
        withCredentials: true,
        data: payload,
        }
        const res = await axios(config)
        if (res.data.success)
        {
            window.location.href = window.location.href
        }
        else{
            alert("Bạn không có quyền để xóa người dùng")
        }
    
    }
    return (
      <>
        <Button variant="danger" onClick={handleShow} className="btn btn-primary btn-sm" style={{marginRight: '5px'}} >
            <AiFillDelete />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="textarea"
                  disabled
                  value="Bạn có chắc chắn muốn xóa người dùng ?"
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
  