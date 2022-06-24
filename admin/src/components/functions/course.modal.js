import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

export function CourseModal(props) {
    const [show, setShow] = useState(false);
  
    const data=([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async (event) => {
        event.preventDefault()
        const payload = new FormData()
        payload.append("id_class",props.data.id_class)
        payload.append("image_class",data.image)
        payload.append("name_class",data.title)
        payload.append("description_class",data.description)
        payload.append("overview_class",data.overview)
        payload.append("price_class",data.price)

        const typeuser = localStorage.getItem("type_user");
        const typeuserjson = JSON.parse(typeuser)
        payload.append("id_type_user",typeuserjson.id_type_user)

        const user = localStorage.getItem("user");
        const userjson = JSON.parse(user)
        payload.append("id_user",userjson.id_user)

        const config = {
          method: 'put',
          url: 'http://localhost:5000/class/updateClass',
          withCredentials: true,
          data: payload,
          headers: {'Content-Type': 'multipart/form-data'}
        }
        const res = await axios(config)
        console.log(JSON.stringify(res))
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
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Overview</Form.Label>
                <Form.Control 
                    as="textarea" 
                    required
                    rows={4} 
                    defaultValue={props.data.overview_class}
                    onChange={e => {data.overview = e.target.value} }
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
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  required
                  accept="image/*"
                  value={data.image}
                  onChange={e => {data.image = e.target.files[0]} }
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
  