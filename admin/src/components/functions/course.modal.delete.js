import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export function CourseModalDelete(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        // const config = {
        //     method: 'post',
        //     url: 'http://localhost:5000/auth/jwt',
        //     withCredentials: true,
        //     headers: { 'Authorization': "Bearer " + accesstoken}
        //   }
        //   const res = await axios(config)
          handleClose()
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
              <Form.Group className="mb-3">
                <Form.Label>Current State</Form.Label>
                <Form.Check 
                    type="switch"
                    defaultChecked={props.data.active_class}
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
  