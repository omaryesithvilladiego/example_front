import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import app from "./empresas.json";
import data from "./csvjson.json";
import data2 from "./csvjson2.json";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "framer-motion";

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';







const { APIEMPRESA } = app
const { APIUSUARIO } = app

export default function Registro() {

    const [nombre_empresa, setnombre_empresa] = useState("")
    const [address, setaddress] = useState("")
    const [nit, setnit] = useState(0)
    const [telefono, settelefono] = useState(0)
    const [name_encargado, setname_encargado] = useState("")
    const [email, setemail] = useState("")
    const [usuario, setusuario] = useState("")
    const [pass, setpass] = useState("")
    const [disabled, setdisabled] = useState(false)
    const [enabled, setenabled] = useState(false)
    const [departamento, setDepartamento] = useState("")
    const [ciudad, setciudad] = useState("")
    const [CiudadbyDepSelected, setCiudadbyDepSelected] = useState([])



    const handleChangeciudad = (event) => {
        setciudad(event.target.value)
    }   

    const handleChange = (event) => {

        setDepartamento(event.target.value)


        var filter = data.filter((datos) => datos.ANTIOQUIA === event.target.value)
        console.log(filter)

        var x = filter.map((i) => i[1])
        console.log(x[0])

            setCiudadbyDepSelected(data2.filter((datos) => datos['1__1'] === x[0]))

       

        

    }


    function sendDatatoDatabase() {


        axios
            .post(`${APIEMPRESA}/create-empresa`, {
                nombre_empresa: nombre_empresa,
                address: address,
                nit: nit,
                telefono: telefono,
                name_encargado: name_encargado,
                email: email,
                ciudad:ciudad,
                departamento:departamento
                
                
            })
            .then((response) => {
                console.log(response.data)

                alert("los datos se han " + response.data.msg)



            })
        setaddress("")
        setemail("")



            .catch((err) => {
                console.log(err);
            });





    }

    function sendSecondDatatoDatabase() {


        axios
            .post(`${APIUSUARIO}/create-user`, {
                usuario: usuario,
                pass: pass

            })
            .then((response) => {
                console.log(response.data)


            })



            .catch((err) => {
                console.log(err);
            });

    }







    return (<Container>



        <form onSubmit={(event) => {
            event.preventDefault();

            sendDatatoDatabase();


        }} className={`${disabled ? 'disabled' : ''}`}>
            {/* ${ this.isnull() ?  '' : 'disabled'} ${ this.isnull() ?  '' : 'disabled'} */}
            <div className={`grid grid-cols-2 gap-4  `} >

                <div >
                    <div className=" mb-6">


                        <input onChange={(e) => {
                            setnombre_empresa(e.target.value)
                        }

                        } type="text" className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="" placeholder="Nombre de la empresa" />




                    </div>

                    {/* {nombre_empresa} */}
                    <div className="form-group mb-6 d-flex">
                        <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Dirección" onChange={(e) => {
                                setaddress(e.target.value)
                            }} />


                        {/* {address} */}
                    </div>





                </div>
                <div className="form-group mb-6">
                    <input className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                        placeholder="nit de la empresa" onChange={(e) => {
                            setnit(e.target.value)

                        }} />
                    {/* {nit} */}
                </div>




                <div className="form-group ">

                    <input type="tel" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Telefono de la empresa" onChange={(e) => {
                            settelefono(e.target.value)
                        }} />

                    {/* {telefono} */}
                </div>
                <div className="form-group ">

                    <input type="email" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Email" onChange={(e) => {
                            setemail(e.target.value)
                        }} />

                    {/* {email} */}
                </div>

                <div className="form-group ">

                    <input type="tel" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                        placeholder="Nombre del encargado" onChange={(e) => {
                            setname_encargado(e.target.value)
                        }} />

                    {/* {name_encargado} */}
                </div>

                <div className="form-group">
                <h6>Seleccionar Departamento: </h6>
                    <select value={departamento} onChange={handleChange}>
                        {data.map((i) => {
                            return <option key={i} value={i.ANTIOQUIA} >{i.ANTIOQUIA}</option>
                        })}
                    </select>
                {/* {departamento} */}
                        <h6>Seleccionar Ciudad: </h6>
                    <select onChange={handleChangeciudad}>
                        {CiudadbyDepSelected.map((i) => {
                            return <option key={i.Cáceres} value={i.Cáceres} >{i.Cáceres}</option>
                        })}
                    </select>
                    {/* {ciudad} */}



                </div>






                <motion.button

                    onClick={() => {

                        setdisabled(true)




                    }}
                    className="container button w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >Next</motion.button>
            </div>
        </form>





        <div>



            <form onSubmit={() => {

                sendSecondDatatoDatabase()


            }} className={`grid grid-cols-2 gap-4 ${disabled ? '' : 'disabled'}`}>
                <div >
                    <div className="form-group mb-6">


                        <input onChange={(e) => {
                            setusuario(e.target.value)
                        }

                        } type="text" className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                            aria-describedby="" placeholder="Usuario" />




                    </div>


                    <div className="form-group mb-6 d-flex">
                        <input type="password" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                            aria-describedby="emailHelp124" placeholder="Contraseña" onChange={(e) => {
                                setpass(e.target.value)
                            }} />



                    </div>





                </div>














                <button className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" onClick={() => {
                        setdisabled(false)

                    }} >Registrarse</button>
            </form>
        </div>


    </Container>

    );

}

const Container = styled.div`


    .disabled {
        display: none;
    }

    .enabled {
       
    }


margin-top: 10rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;


.disabled {
    display: none;
}
`
