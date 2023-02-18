import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Accordion, AccordionItem, AccordionTitle } from "./accordeon.component";
import {MdOutlineCardTravel} from "react-icons/md"
import {GrContact} from "react-icons/gr"
import "./sidebar.css"











export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
  
    render() { 
        return ( <Contenedor className='enabled main-contenido'>

          <h2 className='sidebar-title'>Navegación</h2>

<Accordion >
      <AccordionItem >
        <AccordionTitle >
          <div type="button" className="division">
          
            <MdOutlineCardTravel className="icon-servicios" />
            
           
          <h2 className="tittle-servicios" >Servicios</h2>
          </div>
         
        </AccordionTitle>
        <div className='despliegue'>
          <p>Contenido de la sección 1.</p>
          <p>Contenido de la sección 1.</p>
          <p>Contenido de la sección 1.</p>
          <p>Contenido de la sección 1.</p>
          <p>Contenido de la sección 1.</p>
        </div>
      </AccordionItem>
      <AccordionItem >
        <AccordionTitle >
          <div type="button" className="division">
            
            <GrContact className="icon-servicios" />
         
           
          <h2 className="tittle-servicios" >Contacto</h2>
          </div>
         
        </AccordionTitle>
        <div className='despliegue'>
          <p>Contenido de la sección 1.</p>
        </div>
      </AccordionItem>
    </Accordion>



        </Contenedor> );
    }
}
 
const Contenedor = styled.div`


    background-color: #2980b9;

      h6 {
        color: black;
      }

    .icon {
      color: white;
      font-size: 2rem;
      margin-left: 7.5rem;
      margin-top: 4rem;
    }
    

    #icon-settings {
 
    grid-row-start: 4;
    grid-row-end: 5;
    }


   
    height: 82.9vh;
   
    overflow-y: scroll;
    scroll-behavior: smooth;
    
    

  align-items: center;
  
  


  .button {
    
    cursor: pointer;
    width: 100%;
    height: 2rem;
    background-color: #7c97af;
    text-align: center;
    justify-content: center;
    border: none;
    color: white;
    align-items: center;
    padding-top: 0.3rem;
    text-decoration: none;
    :hover {
        transform: scale(1.05);
        background-color: #88a8c4;
    }
    

    


    
  
    
  }


  ::-webkit-scrollbar {
    display: none;
  }

    @media (max-width: 1100px) {
    
        display: none;
    

}

  

    
`