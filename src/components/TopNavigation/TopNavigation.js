import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import React, { Component,Fragment } from 'react'
import { Navbar,Nav } from 'react-bootstrap' 
import beforeScroll  from '../../asset/images/beforescroll.png'
import afterScroll  from '../../asset/images/afterscroll.png'

export class TopNavigation extends Component {
  constructor(){
      super();
      this.state = {
          navBarTitle: "navTitle",
          navBarLogo: [beforeScroll],
          navBackgroundColor: "navBackground",//css class
          navItem: "navItem",//css class
          navVariant: "dark"
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
                <Navbar  variant={this.state.navVariant} className={this.state.navBackgroundColor} fixed="top" collapseOnSelect expand="lg"  >
                    <Navbar.Brand className={this.state.navBarTitle} href="#home"><img className="NavLogo" src={this.state.navBarLogo} alt="Logo"/> Rafiqul Islam</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav >
                            <Nav.Link className={this.state.navItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#deets">ABOUT</Nav.Link>
                            
                       
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
