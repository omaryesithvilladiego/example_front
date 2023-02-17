import React from 'react'
import { request } from '../helper/helper';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import DataGrid from '../grid/grid';
import {Container} from 'react-bootstrap';


    const columns = [
        {
            dataField:"_id",
            text:"ID",
            hidden: true,

        },
        {
            dataField:"nombre",
            text:"Nombre",
        }

    ]



export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        request
        .get(this.props.url)
        .then((response) => {
            this.setState({ rows: response.data });
        })
        .catch((error) => {
            console.log(error);
        });

    }


    render() {
        return (
        
        <Containerlocal id='empleados-buscar-container'>

            <Container>
            <Row>
                <h1>Buscar empleados</h1>
            </Row>
            <Row>

                <DataGrid url="/estudiantes/find" columns={ columns } />
                
          
            </Row>
            </Container>
        </Containerlocal>);
    }
}

const Containerlocal = styled.div`

        margin-top: 2rem;
        text-align: center;

   h1 {
    color: black;
   }
 `



