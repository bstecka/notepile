import React, { Component } from 'react';
import { Paragraph, Box, base } from 'grommet';
import styled, { css } from 'styled-components';

const BinderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3.5em;
  height: ${props => props.selected ? "4.5em" : "3em"};
  background: ${props => props.color};
  
  &:hover {
    background: black;
    cursor: pointer;
`;

/*&:hover {
  background: ${props => props.selected ? "black" : ''};
  animation: ${keyFrame} 1s ease-out forwards;
  cursor: pointer;
}*/

const BinderLabel = styled.div`
  width: 2em;
  height: 45%;
  background: white;
`;

const AccentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
`;

const BinderAccent = styled.div`
  width: 0.9em;
  height: 0.9em;
  border-radius: 50%;
  background: white;
`;

export default class Binder extends Component {

  constructor(props) {
    super(props)
    this.state = { selected: this.props.selected }
  }

  onClick = () => {
    this.setState({ animate: true });
    if (this.props.selected)
      this.props.setSelectedCategory(0);
    else
      this.props.setSelectedCategory(parseInt(this.props.id, 10));
  }

  render() {
    return (
      <BinderContainer 
      animate={this.state.animate} 
      selected={this.props.selected} 
      color={this.props.color} 
      onClick={this.onClick}
      onAnimationEnd={() => this.setState({ animate: false })}>
        <BinderLabel/>
        <AccentContainer><BinderAccent/></AccentContainer>
      </BinderContainer>
    );
  }
}