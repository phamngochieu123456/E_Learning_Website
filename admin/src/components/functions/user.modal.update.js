import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

export function UserModal(props) {
    const [show, setShow] = useState(false);
  
    const data={
      name_user: props.data.name_user,
      image_user: '',
      phone_user: props.data.phone_user,
      birth_user: props.data.birth_user.substr(0,10),
      sex_user: props.data.sex_user,
      id_user: props.data.id_user,
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async (event) => {
        event.preventDefault()
        const payload = new FormData()
        payload.append("name_user",data.name_user)
        payload.append("image_user",data.image_user)
        payload.append("phone_user",data.phone_user)
        payload.append("birth_user",data.birth_user)
        payload.append("sex_user",data.sex_user)
        payload.append("id_user",data.id_user)

        const config = {
          method: 'put',
          url: 'http://localhost:5000/user/updateUser',
          withCredentials: true,
          data: payload,
          headers: {'Content-Type': 'multipart/form-data'}
        }
        const res = await axios(config)
        if (res.data.success){
          window.location.href = window.location.href
        }
        else alert("Bạn không có quyền để cập nhập thông tin người dùng")
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={props.data.name_user}
                  onChange={e => {data.name_user = e.target.value} }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" defaultValue={props.data.phone_user} required 
                    onChange={e => {data.phone_user = e.target.value} }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
              >
                <Form.Label>Birth</Form.Label>
                <Form.Control 
                    type="date" 
                    required
                    defaultValue={props.data.birth_user}
                    onChange={e => {data.birth_user = e.target.value} }
                    />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sex</Form.Label>
                <br />
                <Form.Check
                    inline
                    label="Male"
                    name="sex_user"
                    type="radio"
                    defaultChecked={props.data.sex_user ? '1' : ''}
                    onChange={e => {data.sex_user = e.target.value} }
                />
                <Form.Check
                    inline
                    label="Female"
                    name="sex_user"
                    type="radio"
                    defaultChecked={!props.data.sex_user ? '0' : ''}
                    onChange={e => {data.sex_user = e.target.value} }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  required
                  accept="image/*"
                  value={data.image}
                  onChange={e => {data.image_user = e.target.files[0]} }
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
  