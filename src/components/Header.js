import React, { Component } from "react";
import Binder from './Binder.js';
import { Paragraph, Box, DropButton, base } from 'grommet';
import CategorySelectionArea from './CategorySelectionArea';
import Note from './Note.js';
import EmptyNotice from './EmptyNotice.js'
import api from '../api'

export default class Header extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        justify="between"
        >
          <Box
          direction="row"
          pad="small"
          width="medium"
          border={{ size: 'none' }}
          >
          </Box>
          <CategorySelectionArea/>
          <Box
          direction="row"
          pad="small"
          width="medium"
          justify="end"
          border={{ size: 'none' }}
          >
            <DropButton
              label="Categories"
              alignSelf="start"
              dropAlign={{ top: 'bottom', right: 'right' }}
              dropContent={
                <Box pad="large" background="light-2" />
              }
            />
          </Box>
        </Box>
      );
    }
}