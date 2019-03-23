import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { API_KEY } from '../secret.js';

import { connect } from 'react-redux';
import { movies } from '../actions';

const urlcomp="https://image.tmdb.org/t/p/w342/";

class MovieResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            fav: true
        }
    }
    search() {
        console.log('searched clicke', this.state.query);
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${this.state.query}`
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(response =>this.props.movies(response.results))
    }
    display(){
        if(this.state.fav){
            return <span onClick={(items)=>this.setState({fav: !this.state.fav})}>Not Fav</span>
        }else{
            return <span>Favorited</span>
        }

    }
    render() {
        console.log('this.prop',this.props.movies);
        return (
            <div>
                <Form inline>
                    <FormGroup>
                        <FormLabel>Search:
                        </FormLabel>
                        <FormControl type="text" search="wonder"
                            onChange={(event) => this.setState({ query: event.target.value })}>

                        </FormControl>
                        <Button onClick={() => this.search()}>Submit</Button>
                    </FormGroup></Form>
                    <Container>
                        <Row>
                            {this.props.smovies.map((items)=>{
                                
                                return <Col md={3} key={items.id}>
                                <p><img src = {urlcomp+ items.backdrop_path}/></p>
                                <p>{items.title}</p>
                                <p>{items.overview}</p>
                                <p>{this.display(items)}</p>
                                </Col>
                            })}
                        </Row>
                    </Container>
            </div>
        )
    }

}
function mapStateToProps(state){
    console.log('state',state);
    return{
        smovies: state.movies
    }
}

export default connect(mapStateToProps,{movies})(MovieResults)
//export default MovieResults