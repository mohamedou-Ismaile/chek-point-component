
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Col,Row} from 'react-bootstrap';
import ProfilePhoto from './Profile/ProfilePhoto';
import FullName from './Profile/FullName';
import Address from './Profile/Address';

function App() {
  return (
    <div className="App">
      <Row className="justify-content-center pt-5  " > 
            <Col xs="6" md="3">
            <Card  bg="dark">
      <ProfilePhoto />
      <Card.Body style={{color: 'white'}} >
      <FullName />
      <Address />
      </Card.Body>
      <Card.Footer>
      <small className="text-muted">Junior Full stack JS Developer</small>
    </Card.Footer>
      </Card>
      </Col>
      </Row>
    </div>
  );
}

export default App;
