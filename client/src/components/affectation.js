import React, {useState, useEffect} from 'react'
import axios from "axios";
import {
    Badge,
    Card,
     Navbar,
    Nav,
    Table,
    Row,
    Col,
  } from "react-bootstrap";
  import { NavLink } from 'react-router-dom'

const divStyle = {
  color: 'black',
  background: '#d4e8f3',
  height: 1000
};
const Affectation = ({history}) => {
    
const [data, setdata] = useState([]);  
    const getData = async () => {
      const { data } = await axios.get('http://localhost:4020/api/contact');
      setdata(data);
    };
  
    useEffect(() => {
      getData();
    }, []);

    return (
        <div class="" style={divStyle}>
        <form>
          
     <div class="" >
  <div class="container">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb" >
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Affectation</li>
  </ol>
</nav>

  <br/><br/><br/><br/><br/>
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
                    <td>
                        <NavLink to={{
                            pathname:"/Affectation2",
                            state:contacta._id
                        }}>
                         Affecter
                        </NavLink>
                    </td>
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
            
            
           
</form>
    </div>
)
}

export default Affectation

