import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

export function CourseModal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="btn btn-primary btn-sm" style={{marginRight: '5px'}} >
            <BiEdit />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.data.name_class}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={props.data.description_class}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.data.price_class}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Active</Form.Label>
                <Form.Check 
                    type="switch"
                    defaultChecked={props.data.active_class}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Documents</Form.Label>
                <Form.Control
                  type="file"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  