import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login'
import Dashboard from './dashboard'
import Logout from './logout'


function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component = {Login} exact={true}/>
                <Route path='/dashboard/:id' component={Dashboard} />
                <Route path='/' component = {Logout} exact={true}/>
            </div>
        </BrowserRouter>
    )
    
}

export default  App