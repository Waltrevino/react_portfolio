import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";

// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Walter Zapata Echols",
      links: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"}
      ],
      home: {
        title: "Home Page",
        subTitle: "Home page",
        text: "Home page"
      },
      about: {
        title: "About Me"
      },
      portfolio: {
        title: "My Projects",
        subTitle: "Used the latest technologies"
        // text: "Check out some of my projects below"
      },
      contact: {
        title: "Contact"
      }
    }
  }

  render(){
    return (
      <Router>
        <Container fluid={false} className="main-container p-0">
          <Navbar className="border-bottom" bg="transparent" expand="lg" style={{height: 75}}>
            <Navbar.Brand>Walter Zapata Echols</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        <div className="content-wrap">
          <Route exact path="/" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>} />
          {/* <Route path="/about" render={() => <AboutPage title={this.state.about.title}/>} /> */}
          <Route exact path="/react_portfolio" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text}/>} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title}/>} />
        </div>

        <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
