import React from 'react';
import styled from 'styled-components';

export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (<Container>
            <center><h1 >
                Home page

            </h1>

                <div className='content d-grid'>
                    <div className='first-content'>

                    </div>
                    <div className='second-content'>
                    <p>What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                   
                </div>
            </center>

        </Container>);

    }
}


const Container = styled.div`



@media (min-width: 1100px) {
    .content {
    grid-template-columns: repeat(4, 1fr);
   
}

.first-content {
    background-color: red;
    grid-column-start: 1;
    grid-column-end: 3;
    max-width: 100%;
    height: 20rem;
}


.second-content {
    grid-column-start: 3;
    grid-column-end: 5;

   
}
}

.first-content {
    max-width: 100%;
    height: 20rem;
    background-color: red;

}

.content  {
  
}



height: 100vh;
height: 79.2vh;
    overflow-y: scroll;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
    display: none;
}

`


