import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { crmaffectation } from '../redux/actions/contactActions'
import {useDispatch, useSelector} from "react-redux"
const divStyle = {
  color: 'black',
  background: '#d4e8f3',
  height: 700
};
const affectation = ({history}) => {
    
    return (
        <div class="" style={divStyle}>
        <form>
          
     <div class="" >
  <div class="container">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb" >
    <li class="breadcrumb-item"><a href="">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>

  <br/><br/><br/><br/><br/>
  <div class="row">
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Entreprise</Form.Label> {/* label */}
            <Form.Control name="entreprise" placeholder=" Entreprise"  /> {/* input */}
        </Form.Group>
            </div>
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Secteur d'activité</Form.Label> {/* label */}
            <Form.Control name="secteur" placeholder="Secteur d'activité"  /> {/* input */}
        </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse</Form.Label> {/* label */}
            <Form.Control name="Adresse" placeholder="Adresse" /> {/* input */}
        </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Gouvernorat</Form.Label> {/* label */}
            <Form.Control name="gouv" placeholder="Gouvernorat"  /> {/* input */}
        </Form.Group>
            </div>
  </div>
  <div class="row">
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Fax</Form.Label> {/* label */}
            <Form.Control name="fax" placeholder="Fax" /> {/* input */}
        </Form.Group>
            </div>
    <div class="col">
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label> {/* label */}
            <Form.Control name="email" placeholder="Enter your email" /> {/* input */}
        </Form.Group>
            </div>
            <div class="col">
    <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Télephone</Form.Label> {/* label */}
            <Form.Control name="tel" placeholder="Télephone" /> {/* input */}
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
         <Button >
                Register
            </Button>
        </div>
    </div>
            </div>
            </div>
            </div>
            
           
</form>
    </div>
)
}

export default affectation

