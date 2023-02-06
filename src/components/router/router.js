import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from "../login/login.components";
import Inicio from '../index';
import PrivateRouter from '../auth/private.router';
import EmpleadosBuscar from '../empleados/emplados.component';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>

      <Route exact path={["/usuarios/login","/login"]} component={ Login }></Route>
      <PrivateRouter exact path="/empleados" component={ EmpleadosBuscar } />
      <Route exact path="/" component={ Inicio }></Route>
      <Route exact path="/*" component={ () => (<h1 style={{marginTop:300, textAlign:'center'}}>
        page not found
      </h1>) }></Route>
         </Switch>
      </Router>
   
  );
}



 /* <Route exact path='/login' element={<Login/>}></Route>
        <Route  path='/*' element={
            (<h1 style={{marginTop:300, textAlign:'center'}}>
            404<br/>Page not found
            </h1>)
        }></Route>
        <Route path='/home' element={<Inicio />}></Route> */