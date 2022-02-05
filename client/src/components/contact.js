import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import {
    Badge,
    Card,
     Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
const divStyle = {
  color: 'black',
  background: '#d4e8f3',
  height: 1000
};
const Contact = ({history}) => {

    const [data, setData] = useState([]);
  
    const getData = async () => {
      const { data } = await axios.get('http://localhost:4020/api/contact');
      setData(data);
    };
  
    useEffect(() => {
      getData();
    }, []);
  


    const [newcontact, setNewcontact] = useState({})

    const handleInput = (e) => {
        setNewcontact({...newcontact, [e.target.name]: e.target.value})
    }
    const add = async () => {
    
      await   axios({
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        url: 'http://localhost:4020/api/contact/addcontact',
        data: newcontact,
      }).then(function (response) {
        console.log(response);
      });
      history.push('/')
      
    }
    return (
        <div class="" style={divStyle}>
        <form>
          
     <div class="" >
  <div class="container">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb" >
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>

  <br/><br/><br/><br/><br/>
  <div class="row">
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Entreprise</Form.Label> {/* label */}
            <Form.Control name="entreprise" placeholder=" Entreprise" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Télephone</Form.Label> {/* label */}
            <Form.Control name="tel" placeholder="Télephone" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
       
            </div>
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Secteur d'activité</Form.Label> {/* label */}
            <Form.Control name="secteur" placeholder="Secteur d'activité" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
            </div>
           
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Gouvernorat</Form.Label> {/* label */}
            <Form.Control name="gouvernorat" placeholder="Gouvernorat" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
            </div>
            </div>
            <div class="row">

            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label> {/* label */}
            <Form.Control name="mail" placeholder="Enter your email" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Fax</Form.Label> {/* label */}
            <Form.Control name="fax" placeholder="Fax" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse</Form.Label> {/* label */}
            <Form.Control name="adresse" placeholder="Adresse" onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
            </div>
          
  <div class="row">
    <div class="col">
   
    </div>
    <div class="col">
   
    </div>
    <div class="col">
   
    </div>
    <div class="col">
   
    </div>
    <div class="col">
   
    </div>
    <div class="col">
    <Button onClick={() => add()}>
                Register
            </Button>
        </div>
    </div>

        <br/><br/><br/><br/>
    <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Liste des Contacts</Card.Title>
                <p className="card-category">
                 
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                 

                    <tr>
                      <th className="border-0">Entreprise</th>
                      <th className="border-0">Gouvernourat</th>
                      <th className="border-0">Secteur</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Télephone</th>
                    </tr>
                  </thead>
                  <tbody>
                 { data.map((contacta) =>
                    <tr>
                      <td>{contacta.entreprise}</td>
                      <td>{contacta.gouvernorat}</td>
                      <td>{contacta.secteur}</td>
                      <td>{contacta.mail}</td>
                      <td>{contacta.tel}</td>
                    </tr>
                 )}
                    </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          </Row>
            </div>
            </div>
            </div>
            
           
</form>
    </div>
)
}

export default Contact

