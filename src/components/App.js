import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieResults from './MovieResults';


class App extends Component {
  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col md={12} className="jumbotron">
            <p> This is the movies app</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <MovieResults></MovieResults>
            </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
