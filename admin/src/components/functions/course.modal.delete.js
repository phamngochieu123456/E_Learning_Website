import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

export function CourseModalDelete(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async (event) => {
      event.preventDefault()

      const user = localStorage.getItem("user");
      const userjson = JSON.parse(user)

      const payload = {
        id_class:props.data.id_class,
        id_user:userjson.id_user
      }
      const config = {
        method: 'delete',
        url: 'http://localhost:5000/class/deleteClass',
        withCredentials: true,
        data: payload,
      }
      const res = await axios(config)
      if (res.data.success){
        window.location.href = window.location.href
      }
      else alert("Bạn không có quyền để xóa khóa học")
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="btn btn-danger btn-sm" style={{marginRight: '5px'}} >
            <AiFillDelete />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.data.name_class}
                  disabled
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={props.data.description_class} disabled/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.data.price_class}
                  disabled
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleClick}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  