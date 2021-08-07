import React, {Component} from 'react';
import Nav from '../../components/Nav'
import {Route, Redirect, Router} from 'react-router-dom'
import About from '../About';
import Resume from '../../components/Resume';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';

class Header extends Component {
    render() {
        return(
            <Router>
                <div className = "reset" id="resetHeader">
                    <a href="www.google.com"><img src ="https://img.icons8.com/color/48/000000/pikachu-pokemon.png" alt="myName" class="icon" id="myNameRest"/></a>
                    <Nav/>
                </div>
                <div>
                    <div className="content">
                        <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                        <Route path="/about" component={About}/>
                        <Route path = "/portfolio" component = {Portfolio}/>
                        <Route path = "/contact" component = {Contact}/>
                        <Route path = "/resume" component = {Resume}/>

                    </div>

                </div>
            </Router>

        )
    }
}

export default Header;