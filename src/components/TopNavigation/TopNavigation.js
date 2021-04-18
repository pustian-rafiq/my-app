import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import React, { Component,Fragment } from 'react'
import { Navbar,Nav } from 'react-bootstrap' 
import beforeScroll  from '../../asset/images/beforescroll.png'
import afterScroll  from '../../asset/images/afterscroll.png'
import {NavLink} from 'react-router-dom'


export class TopNavigation extends Component {
  constructor(props){
      super();
      this.state = {
          navBarTitle: "navTitle",
          navBarLogo: [beforeScroll],
          navBackgroundColor: "navBackground",//css class
          navItem: "navItem",//css class
          navVariant: "dark",
         // pageTitle: props.title // this title is used for dynamic page title
      }
  }

  onScroll=() =>{
      if(window.scrollY > 100){
          this.setState({navBarTitle: 'navTitleScroll', navBarLogo: [afterScroll], navBackgroundColor: 'navBackgroundScroll', navItem: 'navItemScroll', navVariant: 'light'});
      }else if(window.scrollY < 100){
        this.setState({navBarTitle: 'navTitle', navBarLogo: [beforeScroll],  navBackgroundColor: 'navBackground', navItem: 'navItem',navVariant: 'dark'});
      }
  }

  componentDidMount(){
      window.addEventListener('scroll', this.onScroll);
  }
    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                {/* <title>{this.state.pageTitle}</title> */}
                <Navbar  variant={this.state.navVariant} className={this.state.navBackgroundColor} fixed="top" collapseOnSelect expand="lg"  >
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><img className="NavLogo" src={this.state.navBarLogo} alt="Logo"/> Rafiqul Islam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav >
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navItem} to="/">HOME</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navItem} to="/service">SERVICES</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{ color:'#00a8ee' }}  className={this.state.navItem} to="/course">COURSES</NavLink> </Nav.Link>
                            <Nav.Link>   <NavLink exact activeStyle={{ color:'#00a8ee' }}  className={this.state.navItem} to="/portfolio">PORTFOLIO</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink  exact activeStyle={{ color:'#00a8ee' }} className={this.state.navItem} to="/contact">CONTACT</NavLink> </Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }}  className={this.state.navItem} to="/about">ABOUT</NavLink> </Nav.Link>
                       
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
