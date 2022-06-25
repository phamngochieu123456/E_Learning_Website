import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

export function AccountModal(props) {
    const [show, setShow] = useState(false);
  
    const data={
      pass_account:'',
      re_pass_account:'',
      id_account:props.data.id_account,
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async (event) => {
        event.preventDefault()
        if (data.pass_account==="")
        {
          alert("Vui lòng nhập mật khẩu")
        }
        else if (data.pass_account === data.re_pass_account)
        {
          const payload = {
            id_account:data.id_account,
            pass_account:data.pass_account
          }
          const config = {
            method: 'put',
            url: 'http://localhost:5000/user/updateAccount',
            withCredentials: true,
            data: payload,
          }
          const res = await axios(config)
          window.location.href = window.location.href
        }
        else{
          alert("Mật khẩu xác nhận không trùng")
        }
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="btn btn-primary btn-sm" style={{marginRight: '5px'}} >
            <BiEdit />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form validated>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={data.pass_account}
                  onChange={e => {data.pass_account = e.target.value} }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Re-Password</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={data.re_pass_account}
                  onChange={e => {data.re_pass_account = e.target.value} }
                />
                <Form.Label>{data.error}</Form.Label>
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
  