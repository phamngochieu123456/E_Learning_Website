import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export function CourseModalCreate() {
    const [show, setShow] = useState(false);
  
    const data=([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () =>{
        // const config = {
        //     method: 'post',
        //     url: 'http://localhost:5000/auth/jwt',
        //     withCredentials: true,
        //     headers: { 'Authorization': "Bearer " + accesstoken}
        //   }
        //   const res = await axios(config)
        handleClose()
        window.location.href = window.location.href
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="btn btn-primary btn-sm" style={{marginRight: '5px'}} >
            Create New Course
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} validated>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={data.title}
                  onChange={e => {data.title = e.target.value} }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    required
                    rows={3} 
                    value={data.description}
                    onChange={e => {data.description = e.target.value} }
                    />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={data.price}
                  onChange={e => {data.price = e.target.value} }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Documents</Form.Label>
                <Form.Control
                  type="file"
                  required
                  value={data.files}
                  onChange={e => {data.files = e.target.value} }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  