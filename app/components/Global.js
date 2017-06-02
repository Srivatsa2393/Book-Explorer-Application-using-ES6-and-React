import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
  }

  search(){
    console.log('search', this.state.query);
  }

  render() {
    return(
      <div>
        <h1>Book Explorer!</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a group"
              onChange = {event => this.setState({query: event.target.value})}
              onKeyPress = {event => {
                if(event.key === 'Enter'){
                  this.search();
                }
              }}
              />
            <InputGroup.Addon onClick = {() => this.search()}>
              <Glyphicon glyph="search">

              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
};

export default Global;
