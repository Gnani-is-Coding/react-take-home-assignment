import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  const {data} = props
  const {name, email,number} = data

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thank You! {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Personal Details</h4>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>NUmber: {number}</p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal