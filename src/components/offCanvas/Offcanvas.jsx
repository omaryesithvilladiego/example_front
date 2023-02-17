import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionItem, AccordionTitle } from "../accordeon.component";
import "./offcanva.css"
import {MdOutlineCardTravel} from "react-icons/md"
import {GrContact} from "react-icons/gr"
 


import { RiMenu2Line } from "react-icons/ri"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";




export function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Contenedor >

      <div className="main-container">


        <div className="main disabled">
          <Button id="button" onClick={handleShow}>
            <Container >

              <RiMenu2Line className="" id="menu" />



            </Container>
          </Button>

          <Offcanvas show={show} onHide={handleClose}  >
            <Canvas className="canvas" >
              <Offcanvas.Header className="canvas-header" closeButton>
                <Offcanvas.Title>TransDigitalCoop</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
          
              <Accordion >
      <AccordionItem >
        <AccordionTitle >
          <div type="button" className="division">
            <div className="contenido-icon">
            <MdOutlineCardTravel className="icon-servicios" />
            </div>
           
          <h2 className="tittle-servicios" >Servicios</h2>
          </div>
         
        </AccordionTitle>
        <div>
          <p>Contenido de la sección 1.</p>
        </div>
      </AccordionItem>
      <AccordionItem >
        <AccordionTitle >
          <div type="button" className="division">
            <div className="contenido-icon">
            <GrContact className="icon-servicios" />
            </div>
           
          <h2 className="tittle-servicios" >Contacto</h2>
          </div>
         
        </AccordionTitle>
        <div>
          <p>Contenido de la sección 1.</p>
        </div>
      </AccordionItem>
    </Accordion>

              </Offcanvas.Body>



            </Canvas>

          </Offcanvas>
        </div>

        <div className="title-content main">
          <h2>TransDigitalCoop</h2>
        </div>

      


        <div className="login-logo " >

          <Link className="link-to" to="/login">

            <AiOutlineLogin className="login-icon mt-1" />




          </Link>



        </div>


      </div>


    </Contenedor>
  );
}




//CSS Styles ---------------------------------------------------


// const Divider = styled.div`

//   height: 1px;
//   width: 100%;
//   background: rgb(230, 230, 230);
//   margin: 0 0 0 0;
//   box-shadow: 2px 2px 5px #999;

//   @media (min-width: 1100px) {
//     .disabled {
//         display: none;
//         width: 0;
//         height: 0;
//         margin: 0;
//     }

// }



// `;

export const Dividere = styled.div`
  height: 1px;
  width: 100%;
  background: rgb(230, 230, 230);
  margin: 0.5rem 0;
  box-shadow: 2px 2px 5px #999;
  
    
`

const Menu = styled.div`

// Required Bootstrap imports
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

    a:hover{
       transform: scale(1.2);
       text-decoration: none;
      
       

    }
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

const Canvas = styled.div`
  
`



const Contenedor = styled.div`



.link-to {
  color:  black;
  :hover {
      color: #6F5E76;
    } 
  
}
align-items: center;

  
  height: 6.5%;



.main-container{
 display: grid;
 grid-template-columns: repeat(16,1fr);
 background-color:  #132740;
 color:white;
 
 
 



  @media (min-width: 1100px) {
    .disabled {
        display: none;
        width: 0;
        height: 0;
    }
  
}
}
  
  #button {
    background-color: #00ACC9;
    border: none;
    border-radius: 0;
    
    :hover {
      background-color: #6F5E76;
    } 
    height: 100%;
    margin: 0;
    
    
  }

 

 

  #menu {
    color: white;
    font-size: 1.5rem;
    

  

  
   
  }


  //header

  

  @media (min-width: 768px) {
    .botones-header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
    grid-column-start: 3;
    grid-column-end: 12;

  }
  }

  

  .title-content {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0;
    margin-left: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
 
   
  }

  .login-logo {
    grid-column-start: 16;
    grid-column-end: 17;
    grid-row-start: 1;
    grid-row-end: 0.5;
    align-items: center;
    text-decoration: none;
   
    font-size: 1rem;

   
    
    
    
    padding: 0;

   
    margin-top: 0.7rem;
  }

  .buscar{
    grid-column-start: 6;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 0.5;
    margin-top: 0.7rem;
    padding: 0;

  }

  .login-icon {
    transform: scale(2);
    margin-right: 2rem;
  }

  @media (min-width: 900px) {
    grid-column-start: 15;
    grid-column-end: 16;
  }


  @media (max-width: 1100px) {
    .disabled-login {
        display: none;
       
    }
  
}





`;
