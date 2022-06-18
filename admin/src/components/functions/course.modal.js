import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

export function CourseModal(props) {
    const [show, setShow] = useState(false);
  
    const data={
        title:props.data.name_class,
        description:props.data.description_class,
        price:props.data.price_class,
        active:props.data.active_class,
    };

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
        console.log(data)
        window.location.href = window.location.href
    }
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
            <Form validated>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={props.data.name_class}
                  onChange={e => {data.title = e.target.value} }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={props.data.description_class} required 
                    onChange={e => {data.description = e.target.value} }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={props.data.price_class}
                  onChange={e => {data.price = e.target.value} }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Active</Form.Label>
                <Form.Check 
                    type="switch"
                    defaultChecked={props.data.active_class}
                    onChange={
                        e => {data.active = !data.active} 
                    }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  