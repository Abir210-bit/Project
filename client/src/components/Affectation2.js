import React, {useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from "axios";
import {useLocation} from 'react-router-dom'
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
const Affectation2 = (props, history) => {
   const [data, setdata] = useState([]); 
   
    let location = useLocation();

    const getData = async () => {
      const {data }= await axios.get(`http://localhost:4020/api/contact/getContact/${props.location.state}`)
      setdata(data);
      
    }
  
    useEffect(() => {
        getData()
    }, []);
   // console.log(props.location.state)

    const [newcontact, setNewcontact] = useState({})

    const handleInput = (e) => {
        setNewcontact({...newcontact, [e.target.name]: e.target.value})
    }
    const add = async () => {
    
      await   axios({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        url: `http://localhost:4020/api/contact/upcontact/${props.location.state}`,
        data: newcontact
      }).then(function (response) {
        console.log(response);
       
      });
     alert("Votre enregistrement a été effectué avec succès")
      
    }
  
      
    return (
        <div class="" style={divStyle}>
        <form>
          
     <div class="" >
  <div class="container">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb" >
    <li class="breadcrumb-item"> <a href="/">Home</a> </li>
    <li class="breadcrumb-item active" aria-current="page">Affectation</li>
  </ol>
</nav>

  <br/><br/><br/><br/><br/>
  <div class="row">
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Entreprise</Form.Label> {/* label */}
          <br/>
            <Form.Label>{data.entreprise}</Form.Label>
             </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Télephone</Form.Label> <br/>{/* label */}
            <Form.Label>{data.tel}</Form.Label>
                    </Form.Group>
       
            </div>
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Secteur d'activité</Form.Label><br/> {/* label */}
            <Form.Label>{data.secteur}</Form.Label>
                    </Form.Group>
            </div>
           
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Gouvernorat</Form.Label><br/> {/* label */}
            <Form.Label>{data.gouvernorat}</Form.Label>
        </Form.Group>
            </div>
            </div>
            <div class="row">

            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label><br/> {/* label */}
            <Form.Label>{data.mail}</Form.Label>
                    </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Fax</Form.Label> <br/>{/* label */}
            <Form.Label>{data.fax}</Form.Label>
                    </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse</Form.Label> <br/>{/* label */}
            <p>{data.adresse}</p>  
                  </Form.Group>
            </div>
          <br/><br/><br/><br/><br/><br/>
  <div class="row">
  <div class="col">
    <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label>Commercial :</Form.Label> {/* label */}
        </Form.Group>
            </div>
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control name="commercial" placeholder=" commercial"  onChange={(e) => handleInput(e)} /> {/* input */}
        </Form.Group>
    </div>
    <div class="col">
   
    </div>
    
    
    <div class="col">
    <Button onClick={() => add()}>
                Affecter
            </Button>
        </div>
    </div>

        <br/><br/><br/><br/>
        </div>
            </div>
            </div>
            
           
</form>
    </div>
)
}

export default Affectation2
