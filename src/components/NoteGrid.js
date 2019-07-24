import React, { Component } from "react";
import { Box, Stack, Menu, Button } from 'grommet';
import styled from 'styled-components';
import Note from './Note.js';

export default class NoteGrid extends Component {

    constructor(props) {
        super(props);
      }

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        wrap="true"
        justify="center"
        >
            <Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/><Note/>
        </Box>
      );
    }
}