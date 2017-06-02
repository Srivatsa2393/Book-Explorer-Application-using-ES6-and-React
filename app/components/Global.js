import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends React.Component{
  search(){
    console.log('search');
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
