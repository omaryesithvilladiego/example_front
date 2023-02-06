
 import React from 'react'
 import { request } from '../helper/helper';
 import styled from 'styled-components';
 import {  Row } from 'react-bootstrap';
 

 const colunms = [
     {
         dataField:"_id",
         text:"ID",
         hidden:true
     },
     {
         dataField:"nombre",
         text:"Nombre"
     }
 ]
   




  export default class EmpleadosBuscar extends React.Component {
      constructor(props) {
          super(props);
          this.state = {

          }
      }

   

      render() {

          return (<Container id='empleados-buscar-container'>
              <Row>
                  <h1>Buscar empleados</h1>
              </Row>
             


          </Container>);
      }
  }

 const Container = styled.div`
   h1 {
    color: black;
   }
 `



