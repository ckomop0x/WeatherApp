import React, { Component } from 'react';
import "bootswatch/journal/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

// Components
import AlertMessage from './AlertMessage';
import WeatherDisplay from './WeatherDisplay';

const PLACES = [
	{ name: "Amsterdam", zip: "1012NX" },
	{ name: "San Jose", zip: "94088" },
	{ name: "Santa Cruz", zip: "95062" },
	{ name: "Honolulu", zip: "96803" }
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			activePlace: 0,
		};
	}
	render() {
	  const activePlace = this.state.activePlace;
	  return (
      <div className="App">
	      <div>
		      <Navbar>
			      <Navbar.Header>
				      <Navbar.Brand>
					     Weather App
				      </Navbar.Brand>
			      </Navbar.Header>
		      </Navbar>
		      <Grid>
			      <Row>
				      <Col md={4} sm={4}>
					      <h3>Select a city</h3>
					      <Nav
						      bsStyle="pills"
						      stacked
						      activeKey={activePlace}
						      onSelect={index => {
							      this.setState({ activePlace: index });
						      }}
					      >
						      {PLACES.map((place, index) => (
							      <NavItem
								      key={index}
								      eventKey={index}
							      >{place.name}</NavItem>
						      ))}
					      </Nav>
				      </Col>
				      <Col md={8} sm={8}>
					      <WeatherDisplay
						      key={activePlace}
						      zip={PLACES[activePlace].zip} />
				      </Col>
			      </Row>
			      {<WeatherDisplay/> === '<div>Loading<sup>*</sup></div>' ? <Row><Col md={12}><AlertMessage /></Col></Row> : ''}

		      </Grid>
	      </div>
      </div>
    );
  }
}

export default App;
