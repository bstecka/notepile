import React, { Component } from "react";
import Binder from './Binder.js';
import { Paragraph, Box, base } from 'grommet';
import Note from './Note.js';
import EmptyNotice from './EmptyNotice.js'
import api from '../api'

export default class CategorySelectionArea extends Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedCategory: 1,
      };
    }

    setSelectedCategory = (selectedCategory) => {
      this.setState({selectedCategory});
    }

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        pad={{bottom: "large"}}
        gap="small"
        justify="center"
        >
        <Binder id="1" selected={this.state.selectedCategory === 1} color={base.global.colors['brand']} setSelectedCategory={this.setSelectedCategory} />
        <Binder id="2" selected={this.state.selectedCategory === 2} color={base.global.colors['accent-1']} setSelectedCategory={this.setSelectedCategory} />
        <Binder id="3" selected={this.state.selectedCategory === 3} color={base.global.colors['accent-2']} setSelectedCategory={this.setSelectedCategory} />
        <Binder id="4" selected={this.state.selectedCategory === 4} color={base.global.colors['accent-3']} setSelectedCategory={this.setSelectedCategory} />
        </Box>
      );
    }
}