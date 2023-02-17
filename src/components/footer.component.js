import React from 'react';
import styled from 'styled-components';

function Footer() {
    return ( 
        <Contenedor>
            
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">

    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 TransDigitalCoop. Todos los derechos reservados.
    </span>
   
</footer>
</Contenedor> );
}

const Contenedor = styled.div`

  html{
    min-height: 100%;
    position: relative;
  }

  body {
  margin: 0;
 
}


  background-color: transparent;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
 
 




`

export default Footer;